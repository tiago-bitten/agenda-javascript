class Login {
    constructor(formLogin) {
        this.form = document.querySelector(formLogin)
    }

    init() {
        this.events()
    }

    events() {
        if (!(this.form)) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const evento = e.target
        const inputEmail = evento.querySelector('input[name="email"]')
        const inputPassword = evento.querySelector('input[name="password"]')
        let error = false

        if (!(inputEmail.value.length > 0)) {
            alert('EMAIL VAZIO')
            error = true
        }

        if (!(inputPassword.value.length > 3 && inputPassword.value.length < 50)) {
            alert('SENHA INVALIDA')
            error = true
        }

        if (!(error)) evento.submit()
    }
}

class Cadastro {
    constructor(formCadastro) {
        this.form = document.querySelector(formCadastro)
    }

    init() {
        this.events()
    }

    events() {
        if (!(this.form)) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const evento = e.target
        const inputEmail = evento.querySelector('input[name="email"]')
        const inputPassword = evento.querySelector('input[name="password"]')
        let error = false
        
        if (!(inputEmail.value.length > 0)) {
            alert('EMAIL VAZIO')
            error = true
        }

        if (!(inputPassword.value.length > 3 && inputPassword.value.length < 50)) {
            alert('SENHA INVALIDA')
            error = true
        }

        if (!(error)) evento.submit()
    }
}

///////////////////////////////////////////////////////////
const login = new Login('.form-login')                     
const cadastro = new Cadastro('.form-cadastro')          

login.init()
cadastro.init()
//////////////////////////////////////////////////////////

class Contato {
    constructor(formContato) {
        this.form = document.querySelector(formContato)
    }

    init() {
        this.events()
    }

    events() {
        if (!(this.form)) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const evento = e.target
        const regexLetras = /^[a-zA-Z]+$/
        const regexNumeros = /^[0-9]+$/

        const nome = evento.querySelector('input[name="nome"]')
        const sobrenome = evento.querySelector('input[name="sobrenome"]')
        const email = evento.querySelector('input[name="email"]')
        const telefone = evento.querySelector('input[name="telefone"]')

        let error = false

        if (!(regexLetras.test(nome.value))) {
            alert('NOME APENAS LETRAS')
            error = true
        }

        if (!(regexLetras.test(sobrenome.value))) {
            alert('SOBRENOME APENAS LETRAS')
            error = true
        }

        if (!(email.value.length > 0)) {
            alert('EMAIL VAZIO')
            error = true
        }

        if (!(regexNumeros.test(telefone.value))) {
            alert('TELEFONE APENAS NUMEROS')
            error = true
        }

        if (!(error)) evento.submit()
    }
}

const contato = new Contato('.form-contato')
contato.init()