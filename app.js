// 1. KRIPTO VALYUTA KONVERTORI
function hisoblaKripto() {
    const usd = Number(document.getElementById("usdMiqdor").value);
    const tanga = document.getElementById("tangaTanlov").value;
    const natija = document.getElementById("kriptoNatija");

    if (!usd || usd <= 0 || !tanga) {
        chiqarKriptoNatija(natija, "crypto-fail", "Iltimos, dollar miqdorini kiriting va tangani tanlang!");
        return;
    }

    let miqdor = 0;
    let tangaNomi = "";

    // Kurslar: BTC = $65k, ETH = $3.5k, TON = $7
    if (tanga === "btc") {
        miqdor = usd / 65000;
        tangaNomi = "BTC (Bitcoin)";
    } else if (tanga === "eth") {
        miqdor = usd / 3500;
        tangaNomi = "ETH (Ethereum)";
    } else if (tanga === "ton") {
        miqdor = usd / 7;
        tangaNomi = "TON (Toncoin)";
    }

    // Kripto tangalar uchun verguldan keyin ko'proq raqam ko'rsatish kerak (masalan, 5 ta)
    chiqarKriptoNatija(natija, "crypto-win", `$${usd} miqdordagi mablag'ingiz: \n${miqdor.toFixed(5)} ${tangaNomi} ga teng bo'ladi. 🪙`);
}

// 2. NFT QIOMATINI BAHOLASH
function baholaNFT() {
    const noyoblik = document.getElementById("nftNoyoblik").value;
    const obunachi = Number(document.getElementById("muallifObunachi").value);
    const natija = document.getElementById("nftNatija");

    if (!noyoblik || document.getElementById("muallifObunachi").value === "") {
        chiqarKriptoNatija(natija, "crypto-fail", "Barcha maydonlarni to'ldiring!");
        return;
    }

    // Baholash mantiqi zanjiri
    let taxminiyNarx = 0;
    
    if (noyoblik === "oddiy") taxminiyNarx = obunachi * 0.01;
    if (noyoblik === "kamyob") taxminiyNarx = obunachi * 0.5;
    if (noyoblik === "unikal") taxminiyNarx = obunachi * 2;

    if (taxminiyNarx >= 5000) {
        chiqarKriptoNatija(natija, "crypto-win", `Super NFT! Asaringiz bozor qiymati taxminan $${taxminiyNarx.toFixed(0)} deb baholandi. Kimoshdi savdosiga qo'yish mumkin! 🎨💎`);
    } else if (taxminiyNarx > 100 && taxminiyNarx < 5000) {
        chiqarKriptoNatija(natija, "crypto-wait", `Yaxshi natija! NFT bahosi: $${taxminiyNarx.toFixed(0)}. Ko'proq marketing qilsangiz, narxi yanada oshadi.`);
    } else {
        chiqarKriptoNatija(natija, "crypto-fail", `NFT bahosi juda past: $${taxminiyNarx.toFixed(0)}. Obunachilar sonini oshirish yoki noyobroq raqamli asar yaratish kerak.`);
    }
}

// 3. STAKING FOYDASI
function hisoblaStaking() {
    const summa = Number(document.getElementById("stakeSumma").value);
    const oy = Number(document.getElementById("stakeOy").value);
    const natija = document.getElementById("stakeNatija");

    if (!summa || summa <= 0 || !oy || oy <= 0) {
        chiqarKriptoNatija(natija, "crypto-fail", "Summa va muddatni to'g'ri kiriting!");
        return;
    }

    // Yillik foiz stavkasi (APY) o'rtacha 12% deb olamiz (ya'ni oyiga 1%)
    let oylikFoiz = 0.01;
    let sofFoyda = summa * oylikFoiz * oy;
    let umumiySumma = summa + sofFoyda;

    chiqarKriptoNatija(natija, "crypto-win", `${oy} oy davomida staking natijasi:\nSof foyda: +$${sofFoyda.toFixed(2)}\nYakuniy balans: $${umumiySumma.toFixed(2)} 📈`);
}

// Global yordamchi funksiya
function chiqarKriptoNatija(element, statusClass, matn) {
    element.style.display = "block";
    element.className = "result " + statusClass;
    element.innerText = matn;
}
