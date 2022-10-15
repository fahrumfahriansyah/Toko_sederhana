import { dataPakaian, dataTraining, dataMakanan, dataMinuman, dataElektronik } from "./data/data.js";
import { main_toko, popup } from "./html_JS/main_toko.js";
//! toko_main dan toko
const data = [dataPakaian(), dataTraining(), dataMakanan(), dataMinuman(), dataElektronik()]

let tokonya = ""
let main_tokonya = ""
let data_main = []
//? mapping
data.map((a) => {
    a.forEach((b) => {
        const toko = document.querySelector(".toko")
        tokonya += main_toko(b)
        toko.innerHTML = tokonya

        //!toko bagian atas
        //!toko main bagian bawah
        data_main.push(b)
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }
        shuffle(data_main);
    })
})
data_main.forEach(a => {
    main_tokonya += main_toko(a)
    const mainToko = document.querySelector(".main-toko")
    mainToko.innerHTML = main_tokonya

})
//! tutup toko main
//! popup
const tombol_pop = Array.from(document.querySelectorAll(".btn_keranjang"))
tombol_pop.map(a => {
    a.addEventListener("click", function (b) {
        let datanya = b.target.getAttribute("id");
        seleksi_pop(datanya)
        const btn_close = document.querySelector(".btn_close")
        close(btn_close)
    })
})
function seleksi_pop(target) {
    data.map(a => {
        a.forEach(b => {
            if (b.judul === target) {
                const pop_data = document.querySelector(".popup")
                let str = ""
                str += popup(b)
                pop_data.innerHTML = str
            }
        })
    })
}
function close(btn_close) {
    btn_close.addEventListener("click", function () {
        const pop_data = document.querySelector(".popup")
        pop_data.innerHTML = ""
    })
}
//!tutup popup