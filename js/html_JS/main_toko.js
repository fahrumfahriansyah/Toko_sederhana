export function main_toko(data) {
    return /*html*/ ` <div class="container-toko">
    <div class="image-toko">
        <img src="img/toko/${data.img}" alt="">
    </div>
    <div class="text-toko">
        <div class="judul-toko">
            <h3>${data.judul}</h3>
        </div>
        <div class="about-toko">
            <div class="harga-toko">
                <h4>Rp.${data.harga}</h4>
            </div>
            <ul class="list-about">
                <button class="btn_keranjang">
                    <li class="keranjang-toko" id="${data.judul}"></li>
                </button>
                <button class="btn_rating">
                    <li class="rating-toko"></li>
                </button>
            </ul>
        </div>
        <div class="jumlah-beli">
            <h4>terjual ${data.terjual}</h4>
        </div>
    </div>
</div>`
        ;
}


//!popup
export function popup(data) {
    return ` <div class="close">
    <button class="btn_close"><img src="./img/icon/close.png" alt=""></button>
</div>
<div class="container_pop">
    <div class="image_pop">
        <img src="img/toko/${data.img}" alt="">
    </div>
    <div class="keterangan_pop">
        <div class="judul_pop">
            <h2>${data.judul}</h2>
        </div>
        <ul class="list_pop">
            <li class="bintang_pop">
                <h5>${data.rating}</h5>
                <img src="./img/icon/bintang.png" alt="">
            </li>
            <li class="terjual_pop">
                <h4>terjual ${data.terjual}</h2>
            </li>
        </ul>
        <div class="harga_pop">
            <h3>Rp.${data.harga}</h3>
            ${diskon(data)}
        </div>
        ${jenis_pembelian(data)}
        <div class="info_pembelian">
            <div class="pengiriman">
                <img src="./img/icon/pengiriman.png" alt="">
                <h2>pengiriman </h2>
                <p>Rp ${data.pengiriman}</p>
            </div>
        </div>
    </div>
    <div class="akhir_pop">
        <div class="pembelian">
            <div class="keranjang"><button>
                    <img src="./img/icon/keranjang.png" alt="">
                    <h2>keranjang</h2>
                </button></div>
            <div class="belanja"><button>Belanja Sekarang</button></div>
        </div>
    </div>
</div>`
}
//! tutup popup
//! seleksi jenis pembelian
function jenis_pembelian(data) {
    if (data.template === "makanan") {
        return pembelian_makanan(data)
    } else if (data.template === "minuman") {
        return pembelian_minuman(data)
    } else if (data.template === "pakaian") {
        return pembelian_pakaian(data)
    } else if (data.template === "training") {
        return pembelian_training(data)
    } else if (data.template === "elektronik") {
        return pembuatan_elektronik(data)
    }
}


//!seleksi diskon
function diskon(data) {
    if (data.diskon === true) {
        return `<div class="diskon">
        <h1>Diskon</h1>
        </div>`
    } else {
        return `<div class="diskon" style="visibility: hidden;">
    <h1>tidak</h1>
    </div>`}
}
//!tutup seleksi diskon

//! seleksi pembelian

//!pembelian pakaian


function pembelian_pakaian(data) {
    let ukuran = ""
    let warna = ""
    data.ukuran.forEach(a => {
        ukuran += `<li> <button> ${a} </button></li>`
    })
    data.warna.forEach(a => {
        warna += `<li> <button> ${a} </button></li>`
    })
    return `<div class="pembelian_pakaian">
    <div class="ukuran">
        <h4>ukuran</h4>
        <ul>
        ${ukuran}
        </ul>
    </div>
    <div class="warna">
        <h4>warna</h4>
        <ul>
          ${warna}
        </ul>
    </div>
    </div>`
}
//!pembelian training
function pembelian_training(data) {
    let ukuran = ""
    let warna = ""

    data.ukuran.forEach(a => {
        ukuran += `<li> <button> ${a} </button></li>`
    })
    data.warna.forEach(a => {
        warna += `<li> <button> ${a} </button></li>`
    })
    return `<div class="pembelian_pakaian">
    <div class="ukuran">
        <h4>ukuran</h4>
        <ul>
           ${ukuran}
        </ul>
    </div>
    <div class="warna">
        <h4>warna</h4>
        <ul>
           ${warna}
        </ul>
    </div>
    </div>`
}


//!pembuatan makanan
function pembelian_makanan(data) {
    let pilihan = ""
    data.pilihan.forEach(a => {
        pilihan += `<li> <button> ${a} </button></li>`
    })
    return `<div class="pembelian_makanan">
    <div class="rasa">
        <h4>Pilihan</h4>
        <ul>
            ${pilihan}
        </ul>
    </div>
</div>`
}
//!pembelian_minuman()
function pembelian_minuman(data) {
    let pilihan = ""
    data.pilihan.forEach(a => {
        pilihan += `<li> <button> ${a} </button></li>`
    })
    return `<div class="pembelian_makanan">
    <div class="rasa">
        <h4>Pilihan</h4>
        <ul>
            ${pilihan}
        </ul>
    </div>
</div>`
}
//!pembuatan elektrnik
function pembuatan_elektronik(data) {
    return `<div class="pembelian_elektronik">
    <div class="about">
        <p>
    ${data.keterangan}
        </p>
    </div>
    </div> `

}
