let allCategory, allProducts

//all category array
if (localStorage.getItem('allCategory') === null || localStorage.getItem('allCategory') === undefined) {
    allCategory = []
} else {
    allCategory = JSON.parse(localStorage.getItem('allCategory'))
}

// all product array
if (localStorage.getItem('allProducts') === null || localStorage.getItem('allProducts') === undefined) {
    allProducts = []
} else {
    allProducts = JSON.parse(localStorage.getItem('allProducts'))
}



// category side functions 
function addCategory() {
    let categoryName = document.getElementById('inputCategory').value
    let id, msg;
    let check = true
    for (let i of allCategory) {
        if (i.name == categoryName) {
            check = false;
            break;
        }
    }
    if (categoryName != '') {
        if (check) {
            allCategory.length == 0 ? id = 1 : id = allCategory[allCategory.length - 1].id + 1
            let obj = {
                name: categoryName,
                id,
                status: 'active'
            }
            allCategory.push(obj)
            localStorage.setItem('allCategory', JSON.stringify(allCategory))
            document.getElementById('inputCategory').value = null
            msg = `Category successfully Added`
            errMsg('successMsg', msg, 'success')
            showCategory()

        } else {
            msg = `Category already exits`
            errMsg('successMsg', msg, 'danger')
        }
    } else {
        msg = `Please enter Category name`
        errMsg('successMsg', msg, 'danger')
    }
}

function showCategory() {
    let tbl = ''
    let cnt = 1
    for (let i in allCategory) {
        let btns
        if (allCategory[i].status == 'active') {
            btns = `
            <button type="button" id='activebtn${i}' class="btn btn-success" onclick='deactiveCategory(${i})'>
            Active
            </button>
            `
        } else {
            btns = `
            <button type="button" id='deactivebtn${i}' class="btn btn-danger" onclick='activeCategory(${i})'>
                        Deactive
                </button>
            `
        }
        tbl += `
            <tr>
                <td>${cnt++}</td>
                <td>${allCategory[i].name}</td>
                <td>${btns}</td>
                <td>
                    <button type="button" id='deletebtn${i}' class="btn btn-danger" onclick='deleteCategory(${i})' style='font-size: 17px;padding: 5px 15px;'>
                    <i class="fa-solid fa-trash"></i> 
                    </button>
                    <button type="button" style='font-size: 17px;padding: 5px 15px;' id='updatebtn${i}' class="btn btn-info" onclick='updateCategory(${i})'>
                            <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
            </tr>
        `
    }
    document.getElementById('showCategoryList').innerHTML = tbl
    selectCategory()
}

function deleteCategory(index) {
    allCategory.splice(index, 1)
    localStorage.setItem('allCategory', JSON.stringify(allCategory))
    showCategory()
    showProduct()
}

function deactiveCategory(index) {
    allCategory[index].status = 'deactive'
    localStorage.setItem('allCategory', JSON.stringify(allCategory))
    showCategory()
    showProduct()
}

function activeCategory(index) {
    allCategory[index].status = 'active'
    localStorage.setItem('allCategory', JSON.stringify(allCategory))
    showCategory()
    showProduct()
}

function selectCategory() {
    let opt = `<option> --- Select Category --- </option>`
    for (let i of allCategory) {
        if (i.status == 'active') {
            opt += `<option>${i.name}</option>`
        }
    }
    document.getElementById('optionCaterory').innerHTML = opt
}


function updateCategory(index) {
    let addbtn = document.getElementById('addCategoryBtn')
    let cancleBtn = document.getElementById('cancleBtn')
    document.getElementById('inputCategory').value = allCategory[index].name
    addbtn.innerText = 'update'
    addbtn.setAttribute('onclick', `updateCategoryValue(${index})`)
    cancleBtn.style.display = 'inline-block'
}

function cancleUpdate() {
    let addbtn = document.getElementById('addCategoryBtn')
    let cancleBtn = document.getElementById('cancleBtn')
    document.getElementById('inputCategory').value = ''
    addbtn.innerText = 'Add Category'
    addbtn.setAttribute('onclick', `addCategory()`)
    cancleBtn.style.display = 'none'
}
function updateCategoryValue(index) {
    let addbtn = document.getElementById('addCategoryBtn')
    let cancleBtn = document.getElementById('cancleBtn')
    let oldCategory = allCategory[index].name
    let name = document.getElementById('inputCategory').value
    allCategory[index].name = name;
    localStorage.setItem('allCategory', JSON.stringify(allCategory))
    document.getElementById('inputCategory').value = null
    addbtn.innerText = 'Add Category'
    addbtn.setAttribute('onclick', `addCategory()`)
    cancleBtn.style.display = 'none'
    msg = `Category successfully Updated`
    errMsg('successMsg', msg, 'success')

    for (let i of allProducts) {
        if (i.category == oldCategory) {
            i.category = name
        }
        localStorage.setItem('allProducts', JSON.stringify(allProducts))
    }

    showCategory()
    showProduct()
}


// product side functions

function addProduct() {
    let category = document.getElementById('optionCaterory').value
    let product = document.getElementById('inputProduct').value
    let obj = {
        category,
        product,
        status: 'active'
    }
    allProducts.push(obj);
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    let msg = `Product Added successfuly`
    errMsg('successMsgProduct', msg, 'success')
    document.getElementById('optionCaterory').value = null
    document.getElementById('inputProduct').value = null
    showProduct()
}
function showProduct() {
    let tbl = ''
    let cnt = 1
    for (let i in allProducts) {
        let btns
        let checkCategory = false
        for (let j in allCategory) {
            if (allCategory[j].status == 'active' && allCategory[j].name == allProducts[i].category) {
                checkCategory = true
            }
        }
        if (allProducts[i].status == 'active' && checkCategory) {
            btns = `
            <button type="button" class="btn btn-success" onclick='deactiveProduct(${i})'>
            Active
            </button>
            `
        } else {
            btns = `
            <button type="button" class="btn btn-danger" onclick='activeProduct(${i})'>
                        Deactive
                </button>
            `
        }
        tbl += `
            <tr>
                <td>${cnt++}</td>
                <td>${allProducts[i].product}</td>
                <td>${allProducts[i].category}</td>
                <td>${btns}</td>
                <td>
                    <button type="button" id='deleteProductbtn${i}' class="btn btn-danger" onclick='deleteProduct(${i})' style='font-size: 17px;padding: 5px 15px;'>
                    <i class="fa-solid fa-trash"></i> 
                    </button>
                    <button type="button" style='font-size: 17px;padding: 5px 15px;' id='updateProductbtn${i}' class="btn btn-info" onclick='updateProduct(${i})'>
                            <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
            </tr>
        `

    }
    document.getElementById('showProductList').innerHTML = tbl;
}
function deactiveProduct(index) {
    allProducts[index].status = 'deactive'
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
    showProduct();
}
function activeProduct(index) {
    allProducts[index].status = 'active'
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
    showProduct();
}
function deleteProduct(index) {
    allProducts.splice(index, 1)
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
    showProduct()
}
function updateProduct(index) {
    let addProductBtn = document.getElementById('addProductBtn')
    let cancleProductBtn = document.getElementById('cancleProductBtn')
    document.getElementById('optionCaterory').value = allProducts[index].category
    document.getElementById('inputProduct').value = allProducts[index].product
    addProductBtn.innerText = 'update'
    addProductBtn.setAttribute('onclick', `updateProductValue(${index})`)
    cancleProductBtn.style.display = 'inline-block'
}
function updateProductValue(index) {
    let addProductBtn = document.getElementById('addProductBtn')
    let cancleProductBtn = document.getElementById('cancleProductBtn')
    let category = document.getElementById('optionCaterory').value
    let product = document.getElementById('inputProduct').value
    console.log(category, product)
    console.log(allCategory[index])
    allProducts[index].category = category;
    allProducts[index].product = product;
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
    document.getElementById('optionCaterory').value = null
    document.getElementById('inputProduct').value = null
    addProductBtn.innerText = 'Add Product'
    addProductBtn.setAttribute('onclick', `addProduct()`)
    cancleProductBtn.style.display = 'none'
    msg = `Product successfully Updated`
    errMsg('successMsgProduct', msg, 'success')
    showProduct()
}
function cancleUpdate() {
    let addProductBtn = document.getElementById('addProductBtn')
    let cancleProductBtn = document.getElementById('cancleProductBtn')
    document.getElementById('optionCaterory').value = null
    document.getElementById('inputProduct').value = null
    addProductBtn.innerText = 'Add Category'
    addProductBtn.setAttribute('onclick', `addCategory()`)
    cancleProductBtn.style.display = 'none'
}

function showProductBasedOnCatergory() {
    let category = document.getElementById('optionCaterory').value
    let tbl = ''
    let ctn = 1

    if (category != '--- Select Category ---') {
        for (let i of allProducts) {
            if (i.category == category) {
                tbl += `
                    <tr>
                    <td>${ctn++}</td>
                    <td>${i.product}</td>
                    <td>${i.category}</td>
                    </tr>
                `
            }
        }
    } else {
        let check = false
        for (let i of allProducts) {
            for (let j of allCategory) {
                if (j.name == i.category && j.status == 'active') {
                    check = true
                }
            }
            if (i.status == 'active' && check) {
                tbl += `
                <tr>
                <td>${ctn++}</td>
                <td>${i.product}</td>
                <td>${i.category}</td>
                </tr>
                `
            }
        }
    }

    document.getElementById('userProductsList').innerHTML = tbl
}




function errMsg(id, msg, color) {
    document.getElementById(id).innerHTML = `
    <div class="alert alert-${color} p-2" role="alert">
     ${msg}
    </div>
    `
    setTimeout(function () {
        document.getElementById(id).innerHTML = ''
    }, 1500)
}