class Countries {
    constructor() {
        this.countries = []

        this.country = {
            id: '',
            countryName: '',
            capital: '',
            population: 0,
            cuisine: '',
            govtType: '',
            yrEstablished: 0
        }

        this.row = document.getElementById('cardRow')

        this.form = document.getElementById('countryForm')

        this.btn = document.getElementById('submitBtn')
    }

    init() {
        this.collectData()
    }
    /**
     * Collect data
     * Validate data
     * Store data
     * Display data
     */
    collectData() {
        // const form = this.form
        // const btn = this.btn

        const countryName = document.getElementById('countryName').value
        const capital = document.getElementById('capital').value
        const population = parseInt(document.getElementById('population').value)
        const govtType = document.getElementById('govtType').value
        const cuisine = document.getElementById('cuisine').value
        const yrEstablished = parseInt(document.getElementById('yrEstablished').value)

        let obj = {
            countryName,
            capital,
            population,
            govtType,
            cuisine,
            yrEstablished
        }

        this.validateData(population, yrEstablished)
        this.storeData(obj)

    }

    storeData(obj) {
        this.country = {
            id: `${obj.countryName.slice(0, 3)}${obj.yrEstablished}`,
            countryName: obj.countryName,
            capital: obj.capital,
            population: obj.govtType,
            cuisine: obj.cuisine,
            yrEstablished: obj.yrEstablished
        }

        this.countries = [...this.countries, this.country]

        console.log(this.countries)
    }

    validateData(pop, yr) {
        if (isNaN(pop) || isNaN(yr)) {
            alert('Error: population and year must be numerical values')
        } else {
            return
        }
    }
}

const action = new Countries()



action.btn.addEventListener('click',(e)=> {
    e.preventDefault()
    action.init()
})