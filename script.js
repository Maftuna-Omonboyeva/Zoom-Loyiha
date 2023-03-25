// Main Section Code

const page = document.querySelector('.page')
    soft = document.getElementById('soft')
    tabel = document.getElementById('tabel')
    chair = document.getElementById('chair')
    lightnight = document.getElementById('lightnight')
    bed = document.getElementById('bed')
    decore = document.getElementById('decore')
    listItem = document.querySelectorAll('.item')
    modal = document.querySelector('.modal')
    exit = document.querySelector('.exit')
    openModal = document.querySelector('.button')



const softElement = [
    {
        img: 'https://thumbs.dreamstime.com/z/suite-soft-furniture-7664990.jpg',
    },
    {
        img: 'https://img.freepik.com/premium-photo/concept-comfortable-home-holiday-beautiful-soft-chair-pastel-background-3d-render_407474-4305.jpg?w=360',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/12/19/17/57/sofa-1100058_960_720.jpg',
    },
]

const tableElement = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ_3_C60eEopIhLKlKGwVkP6qFqZRj_CtHA&usqp=CAU',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZ8VUUuTf1GasKgTFTNAiwx747Gn7SOciw&usqp=CAU',
    },
    {  
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYm3Hqq3X6Wkuk5rYnaQP6GYmcrKzBw1udyg&usqp=CAU',
    },
    
]

const chairElement = [
    {
        img:'https://www.ulcdn.net/images/products/334898/original/LP_yellow_2.jpg?1673590772',
    },
    {
        img: 'https://assets.architecturaldigest.in/photos/6008466fc622834c8bd6994e/16:9/w_2560%2Cc_limit/Bent-Chair-featured-image-1366x768.jpg', 
    },
    {
        img: 'https://target.scene7.com/is/image/Target/GUEST_723f7ae4-3834-45b5-8e6e-af16f590445c',
    },
]

const bedElement = [
    {
        img: 'https://quokkabeds.com.au/wp-content/uploads/2023/02/original5.jpg',
    },
    {
        img: 'https://media.istockphoto.com/id/655785376/photo/queen-size-double-bed.jpg?s=612x612&w=0&k=20&c=XJTJnZV_zl3p1H9daV_ciy25ir4cI80yMeE2NByftmw=',
    },
    {
        img: 'https://www.theone.com/images/thumbs/0021539_turi-bed-180x200-natural_870.jpeg',
    },
]

const lightNightElement = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_0nuYdskfR8Aj_t9HazBNhuV5so7HGVWQg&usqp=CAU',
    },
    {
        img: 'https://zazahomes.co.uk/wp-content/uploads/2017/07/P7063195-2-1600x1600.jpg',
    },
    {
        img: 'https://hackster.imgix.net/uploads/attachments/475077/hackster-hero-43_VGE1lYou5b.jpg?auto=compress&w=1600&h=1200&fit=min&fm=jpg',
    },
]

const decoreElement = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fPdEhDaWU7gRIanaFdKXWRphEB61mDkbrQ&usqp=CAU',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4FWbewNlmvhmYSEXq3mEAiCxLLYiGWBxKnVqsd7kQFKBbWCajCVbKbg_Nr6w7ook-DE&usqp=CAU',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtd_4LOThnu8F_x7bha5X8Jm8UnhOlJa1NlA&usqp=CAU',
    }
]


// data
const dataPage = [
    {
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80',
    },
    {
        img: 'https://www.d2rinteriors.com/uploads/blog/thumb/living-design.jpg',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8g-zTBe_yThfij79xD6jkmn2Sxop5Cs00A&usqp=CAU',
    },
    {
        img: 'https://i.pinimg.com/474x/7a/f7/b7/7af7b753f6c01110e6932e01e06d1648.jpg',
    },
    {
        img: 'https://www.archstyl.com/images/03_projekty/06_penthouse_v_starom_meste/penthouse_v_starom_meste_cover.jpg',
    },
    {
        img: 'https://dlifeinteriors.com/wp-content/uploads/2023/02/05.jpg',
    },
]


// Page Elements
dataPage.forEach(item => {
    page.innerHTML += `
        <div class="page-card">
            <img src="${item.img}" alt="Error">
        </div>
    `
})

// Products
softElement.forEach(item => {
    soft.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Error">
        </div>
    `
})

tableElement.forEach(item => {
    table.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Error">
        </div>
    `
})

chairElement.forEach(item => {
    chair.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Error">
        </div>
`
})

bedElement.forEach(item => {
    bed.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Error">
        </div>
    `    
})

lightNightElement.forEach(item => {
    lightnight.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Error">
        </div>
    `    
})

decoreElement.forEach(item => {
    decore.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="Error">
        </div>
    `    
})

// Products List active
const hideActive = () => {
    listItem.forEach(item => {
        item.classList.remove('active');
    })
}

const showActive = (k) => {
    listItem[k].classList.add('active');
}

for( let i = 0; i <= listItem.length; i++){
    listItem[i].addEventListener('click', () => {
        hideActive();
        showActive(i);
        // if(listItem[i].classList.contains('active')){
        //     document.querySelector('body').style.overflow = 'hidden'
        // }
    })
}


















