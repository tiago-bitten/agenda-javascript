const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: false, default: '' },
    email: { type: String, require: false, default: '' },
    telefone: { type: String, require: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

class Contato {
    constructor(body) {
        this.body = body
        this.errors = []
        this.contato = null
    }

    async register() {
        this.valida()

        if (this.errors.length > 0) return
        this.contato = await ContatoModel.create(this.body)
    }

    valida() {
        this.cleanUp()

        if ((this.body.email) && (!(validator.isEmail(this.body.email)))) {
            this.errors.push('Email invalido')
        }

        if (!(this.body.nome)) {
            this.errors.push('Nome é um campo obrigatorio.')
        }

        if (!(this.body.email) && (!(this.body.telefone))) {
            this.errors.push('Pelo menos um contato precisa ser enviado.')
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone
        }
    }

    async buscaPorId(id) {
        if (typeof id !== 'string') return

        const user = await ContatoModel.findById(id)
        return user
    }

    async edit(id) {
        if (typeof id !== 'string') return
        this.valida()

        if (this.errors.length > 0) return

        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
    }
}

module.exports = Contato