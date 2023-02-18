import { langdata,langdataFooter,langdataSearch,langdataCat } from "../js/langData.js";

const btn = document.querySelector('#langBtn');
const langItem = document.querySelectorAll('.nav-link')
const brandLang = document.querySelector('.navbar-brand')
const blueBlog = document.querySelector('.blog')
const blueHome = document.querySelector('.home')
const langFooter = document.querySelectorAll('#footer-nav')
const langSearch = document.querySelectorAll('#search-txt')
const langCat = document.querySelectorAll('.cat-li-txt')
const langBtnPlay = document.querySelectorAll('#playBtn')


const changeLang = () => {
    if (btn.innerHTML === "<img src=\"img/Flag_of_Azerbaijan.svg.png\" width=\"30px\" height=\"20px\" alt=\"\"> AZ") {
        for (let i in langdata.az) {
            langItem[i].innerHTML = langdata.az[i];
        }

        brandLang.innerHTML = 'Game Boy';
        blueBlog.innerHTML = 'Oyun Otağı';
        blueHome.innerHTML = 'Ana səhifə // Bloq';
        for (let i in langdataFooter.az) {
            langFooter[i].innerHTML = langdataFooter.az[i];
        }

            langSearch[0].innerHTML = langdataSearch.az[0];
            $('#search-txt-plc').attr("placeholder",'Burada axtar');
            $('#cat').html("Kateqoriya")

            for (let i in langdataCat.az) {
                langCat[i].innerHTML = langdataCat.az[i];
            }

            $('#banner-btn').html("İndi Al!!!")
            $('#tags').html("Populyar Teqlər")
            $('.card-text').html("Buraxilis tarixi - ")
            $(langBtnPlay).html("İndi Oyna")


        btn.innerHTML = '<img src="img/Flag_of_the_United_Kingdom_(1-2).svg.png" width="30px" height="20px" alt=""> EN'
    } else {
        for (let i in langdata.en) {
            langItem[i].innerHTML = langdata.en[i];
        }
        brandLang.innerHTML = 'Game Boy';
        blueBlog.innerHTML = 'Game Boy';
        blueHome.innerHTML = 'Home // Blog';
        
        for (let i in langdataFooter.en) {
            langFooter[i].innerHTML = langdataFooter.en[i];
        }
        langSearch[0].innerHTML = langdataSearch.en[0];
        $('#search-txt-plc').attr("placeholder",'Search here');
        $('#cat').html("Category")

        
        for (let i in langdataCat.en) {
            langCat[i].innerHTML = langdataCat.en[i];
        }
        $('#banner-btn').html("Buy Now!!!")
        $('#tags').html("Popular Tags")
        $(langBtnPlay).html("Play Now")
        $('.card-text').html("Date Released - ")


        btn.innerHTML = '<img src="img/Flag_of_Azerbaijan.svg.png" width="30px" height="20px" alt=""> AZ'
    }
}

btn.addEventListener('click', changeLang)