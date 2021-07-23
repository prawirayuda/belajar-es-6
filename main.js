// Belajar tipe data

// console.log('terhubung');
// myName = "Testing"

// console.log(myName)

// es6
// const myCar = "mobil mobilan"
// console.log(myCar)

// Looping di es6
// const myCars = ['bmw', 'bemo', 'toyota']

// for (let y = 0; y < myCars.length; y++) {
//     console.log(myCars[y])
// }

//tujuannya agar datanya tidak dapat diubah maka gunakan const, tapi kalau ingin tipe datanya yang bisa diubah maka gunakan let
// const user_place = document.getElementById('user')


// const user_logged = "yuda"
// user_place.innerHTML = `Hei, ${user_logged} Pagi!! `;


// belajar Object literal 
// const cart_items = document.getElementById('cart')

// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// var getProduct = addProduct("Asus", "Smartphone")
// cart_items.innerHTML = `Product: ${getProduct.name} dengan Category :${getProduct.category}`





// Belajar Array For each
// const skill_holder = document.getElementById('skills')

// const mySkills = ['Web', 'Dev', 'Mobile', 'Apps', 'Designer']
// console.log(mySkills)

// mySkills.push('Athlete')

// var parent = '<ul>'

// mySkills.forEach((skill) => {
//     parent += '<li>' + skill + '</li>'
//     console.log(`${skill}`)
// })

// parent += '</ul>'
// skill_holder.innerHTML = parent



// belajar Classes

const data = document.getElementById('data')

class Mahasiswa {
    constructor(name, pass, nama_kelas) {
        this.name = name
        this.pass = pass
        this.nama_kelas = nama_kelas
    }
    join() {
        console.log(this.name + ' telah bergabung pada kelas' + this.nama_kelas)
    }
}

let tambahData = new Mahasiswa('Yuda', 'password', ' Web Design')
tambahData.join()

// ini namanya inheritance

class Langganan extends Mahasiswa {
    constructor(name, paket) {
        super(name)
        this.paket = paket
    }

    gabungPaket() {
        console.log('Hi' + this.name + 'telah bergabung pada paket' + this.paket)
    }
}
let tambahLangganan = new Langganan('bangyud ', 'Premium')
tambahLangganan.gabungPaket()