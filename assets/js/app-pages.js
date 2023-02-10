const isUserLogin = localStorage.getItem('userLogin');

if (isUserLogin === null) {
  loginPage()
} else {
  addCategoryPage()
}




function addCategoryPage() {
  const defaultPage = `
    <!--Start sidebar-wrapper-->
    <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
      <div class="brand-logo">
        <a href="index.html">
          <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
          <h5 class="logo-text">Admin Panel - SPA</h5>
        </a>
      </div>
      <ul class="sidebar-menu do-nicescrol">
        <li class="sidebar-header">MAIN NAVIGATION</li>
        <li>
          <a href="javascript:addCategoryPage()">
            <i class="zmdi zmdi-view-dashboard"></i> <span>Add Category</span>
          </a>
        </li>
        <li>
          <a href="javascript:showProductToUserPage()">
            <i class="zmdi zmdi-view-dashboard"></i> <span>Show Products To User</span>
          </a>
        </li>
      </ul>

    </div>
    <!--End sidebar-wrapper-->

    <!--Start topbar header-->
    <header class="topbar-nav">
      <nav class="navbar navbar-expand fixed-top">
        <ul class="navbar-nav mr-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link toggle-menu" href="javascript:void();">
              <i class="icon-menu menu-icon"></i>
            </a>
          </li>
          <li class="nav-item">
            <form class="search-bar">
              <input type="text" class="form-control" placeholder="Enter keywords">
              <a href="javascript:void();"><i class="icon-magnifier"></i></a>
            </form>
          </li>
        </ul>

        <ul class="navbar-nav align-items-center right-nav-link">
          <li class="nav-item dropdown-lg">
            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown"
              href="javascript:void();">
              <i class="fa fa-envelope-open-o"></i></a>
          </li>
          <li class="nav-item dropdown-lg">
            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown"
              href="javascript:void();">
              <i class="fa fa-bell-o"></i></a>
          </li>

          <li class="nav-item">
            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
              <span class="user-profile"><img src="https://via.placeholder.com/110x110" class="img-circle"
                  alt="user avatar"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li class="dropdown-item user-details">
                <a href="javaScript:void();">
                  <div class="media">
                    <div class="avatar"><img class="align-self-start mr-3" src="https://via.placeholder.com/110x110"
                        alt="user avatar"></div>
                    <div class="media-body">
                      <h6 class="mt-2 user-title">Sarajhon Mccoy</h6>
                      <p class="user-subtitle">mccoy@example.com</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item">
                <i class="icon-envelope mr-2"></i> Inbox
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item">
                <i class="icon-wallet mr-2"></i> Account
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item">
                <i class="icon-settings mr-2"></i> Setting
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item" onclick='userLogout()'>
                <i class="icon-power mr-2"></i> Logout
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <!--End topbar header-->

    <div class="clearfix"></div>

    <div class="content-wrapper">
      <div class="container-fluid" id="showPage">



      </div>
      <!-- End container-fluid-->

    </div><!--End content-wrapper-->
    <!--Start Back To Top Button-->
    <a href="javaScript:void();" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
    <!--End Back To Top Button-->
    `
  document.getElementById('wrapper').innerHTML = defaultPage

  const addCategory = `
        <div class="row">
        <div class="col-md-6">
        <div class="card">
            <div class="card-body">
            <div class="card-title ml-2">Add Category Form</div>
            <hr>
            <form>
                <div class="row">
                <div class="col">
                    <div class="form-group">
                    <label for="inputCategory" class="ml-2">Category Name</label>
                    <input type="text" class="form-control  mt-2" id="inputCategory"
                        placeholder="Enter Your Category Name">
                    </div>
                </div>
                </div>


                <div class="form-group ">
                <div class="row">
                    <div class="col-md-6">
                    <button type="button" class="btn btn-light btn-round px-3" onclick="addCategory()" id='addCategoryBtn'>Add
                        Category</button>
                    <button type="button" style='display:none;' class="btn btn-light btn-round px-3" onclick="cancleUpdate()" id='cancleBtn'>Cancle</button>
                    </div>
                    <div class="col-md-6 no-gutters">
                    <div id="successMsg">

                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
        <div class="col-md-6">
        <div class="card">
            <div class="card-body">
            <div class="card-title ml-2">Add Products Form</div>
            <hr>
            <form>
                <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="optionCaterory" class="ml-2">Product Category</label>
                    <select class="form-control  mt-2" id="optionCaterory">

                    </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="inputProduct" class="ml-2">Product Name</label>
                    <input type="text" class="form-control  mt-2" id="inputProduct"
                        placeholder="Enter Your Product Name">
                    </div>
                </div>
                </div>
                <div class="form-group ">
                <div class="row">
                    <div class="col-md-6">
                    <button type="button" id='addProductBtn' class="btn btn-light btn-round px-3" onclick="addProduct()">Add Product</button>

                    <button type="button" style='display:none;' class="btn btn-light btn-round px-3" onclick="cancleProductUpdate()" id='cancleProductBtn'>Cancle</button>
                    </div>
                    <div class="col-md-6">
                    <div id="successMsgProduct">

                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
        </div>

        <div class="row">
        <div class="col">
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Category Table</h5>
            <div class="table-responsive">
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="showCategoryList">

                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
        </div>

        <div class="row">
        <div class="col">
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Products Table</h5>
            <div class="table-responsive">
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">products</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="showProductList">

                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
        </div>
`
  document.getElementById('showPage').innerHTML = addCategory
  showCategory()
  showProduct()
}

function showProductToUserPage() {
  const showProductToUser = `
        <div class="row">
        <div class="col">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Products Table</h5>
                <div class="card">
                <div class="card-body">
                    <form>
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                            <label for="optionCaterory" class="ml-2">Select Category</label>
                            <select class="form-control  mt-3" id="optionCaterory"
                       onchange="showProductBasedOnCatergory()">

                            </select>
                        </div>
                        </div>
                    </div>
                    <!-- <div class="form-group ">
                        <div class="row">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-light btn-round px-5"
                            onclick="showProductBasedOnCatergory()">Show
                            Product</button>
                        </div>

                        </div> -->
                </div>
                </form>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">products</th>
                    <th scope="col">Category Name</th>
                    </tr>
                </thead>
                <tbody id="userProductsList">

                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
  `
  document.getElementById('showPage').innerHTML = showProductToUser
  selectCategory()
  showProductBasedOnCatergory()
}

function loginPage() {
  if (localStorage.getItem('userOtp') !== null) {
    localStorage.removeItem('userOtp')
  }
  const login = `
        <div class="card card-authentication1 mx-auto my-5">
        <div class="card-body">
        <div class="card-content p-2">
            <div class="text-center">
            <img src="assets/images/logo-icon.png" alt="logo icon">
            </div>
            <div class="card-title text-uppercase text-center py-3">Sign In</div>
            <form>
            <div class="form-group">
                <label for="name" class="sr-only">Username</label>
                <div class="position-relative has-icon-right">
                <input type="text" id="name" class="form-control input-shadow"
                    placeholder="Enter Username">
                <div class="form-control-position">
                    <i class="icon-user"></i>
                </div>
                </div>
            </div>
            <div class="form-group">
                <label for="password" class="sr-only">Password</label>
                <div class="position-relative has-icon-right">
                <input type="password" id="password" class="form-control input-shadow"
                    placeholder="Enter Password">
                <div class="form-control-position">
                    <i class="icon-lock"></i>
                </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-6">
                
                </div>
                <div class="form-group col-6 text-right">
                <a href="javascript:resetPasswordPage()">Reset Password</a>
                </div>
            </div>
            <button type="button" onclick="userLogin()" class="btn btn-light btn-block">Sign In</button>
            <div class="form-group" id="err">

            </div>
            </form>
        </div>
        </div>
        <div class="card-footer text-center py-3">
        <p class="text-warning mb-0">Do not have an account? <a href="javascript:registerPage()"> Sign Up here</a></p>
        </div>
        </div>
    
    `
  document.getElementById('wrapper').innerHTML = login
}
function registerPage() {
  const register = `
        <div class="card card-authentication1 mx-auto my-4">
        <div class="card-body">
        <div class="card-content p-2">
            <div class="text-center">
            <img src="assets/images/logo-icon.png" alt="logo icon">
            </div>
            <div class="card-title text-uppercase text-center py-3">Sign Up</div>
            <form>
            <div class="form-group">
                <label for="name" class="sr-only">Name</label>
                <div class="position-relative has-icon-right">
                <input type="text" id="name" class="form-control input-shadow"
                    placeholder="Enter Your Name">
                <div class="form-control-position">
                    <i class="icon-user"></i>
                </div>
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="sr-only">Email ID</label>
                <div class="position-relative has-icon-right">
                <input type="email" id="email" class="form-control input-shadow"
                    placeholder="Enter Your Email ID">
                <div class="form-control-position">
                    <i class="icon-envelope-open"></i>
                </div>
                </div>
            </div>
            <div class="form-group">
                <label for="password" class="sr-only">Password</label>
                <div class="position-relative has-icon-right">
                <input type="password" id="password" class="form-control input-shadow"
                    placeholder="Choose Password">
                <div class="form-control-position">
                    <i class="icon-lock"></i>
                </div>
                </div>
            </div>

            <button type="button" onclick="registerUser()" class="btn btn-light btn-block waves-effect waves-light">Sign
                Up</button>
            <div class="form-group" id="err">

            </div>
            </form>
        </div>
        </div>
        <div class="card-footer text-center py-3">
        <p class="text-warning mb-0">Already have an account? <a href="javascript:loginPage()"> Sign In here</a></p>
        </div>
        </div>
    `
  document.getElementById('wrapper').innerHTML = register
}

function resetPasswordPage() {
  const resetPassword = `
    <div class="height-100v d-flex align-items-center justify-content-center">
    <div class="card card-authentication1 mb-0">
      <div class="card-body">
        <div class="card-content p-2">
          <div class="card-title text-uppercase pb-2">Reset Password</div>
          <p class="pb-2">Please enter your email address. You will receive a link to create a new password via email.
          </p>
          <form>
            <div class="form-group">
              <label for="email" class="">Email Address</label>
              <div class="position-relative has-icon-right">
                <input type="text" id="email" class="form-control input-shadow"
                  placeholder="Enter Your Email Address">
                <div class="form-control-position">
                  <i class="icon-envelope-open"></i>
                </div>
              </div>
            </div>

            <button type="button" onclick="generateOtp()" class="btn btn-light btn-block mt-3">Send OTP</button>
            <div class="form-group" id="err">

            </div>
          </form>
        </div>
      </div>
      <div class="card-footer text-center py-3">
        <p class="text-warning mb-0">Return to the <a href="javascript:loginPage()"> Sign In</a></p>
      </div>
    </div>
  </div>
    `
  document.getElementById('wrapper').innerHTML = resetPassword
}
function validateOtpPage() {
  const validateOtp = `
    <div class="height-100v d-flex align-items-center justify-content-center">
    <div class="card card-authentication1 mb-0">
      <div class="card-body">
        <div class="card-content p-2">

          <form>
            <div class="form-group">
              <label for="inputotp" class="">Enter your 6 digit OTP</label>
              <div class="position-relative has-icon-right">
                <input type="text" id="inputotp" class="form-control input-shadow"
                  placeholder="Enter your 6 digit OTP">
                <div class="form-control-position">
                  <i class="icon-envelope-open"></i>
                </div>
              </div>
            </div>

            <button type="button" onclick="validateUserOtp()" class="btn btn-light btn-block mt-3">Validte OTP</button>
            <div class="form-group" id="err">

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    `
  document.getElementById('wrapper').innerHTML = validateOtp
}

function newPasswordPage() {
  const newPassword = `
    <div class="height-100v d-flex align-items-center justify-content-center">
    <div class="card card-authentication1 mb-0">
      <div class="card-body">
        <div class="card-content p-2">

          <form>
            <div class="form-group">
              <label for="password" class="">Enter New Password</label>
              <div class="position-relative has-icon-right">
                <input type="password" id="password" class="form-control input-shadow"
                  placeholder="Enter New Password">
                <div class="form-control-position">
                  <i class="icon-envelope-open"></i>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="position-relative has-icon-right">
                <input type="password" id="cpassword" class="form-control input-shadow"
                  placeholder="Enter New Confirm Password">
                <div class="form-control-position">
                  <i class="icon-envelope-open"></i>
                </div>
              </div>
            </div>

            <button type="button" onclick="setNewPassword()" class="btn btn-light btn-block mt-3">Reset
              Password</button>
            <div class="form-group" id="err">

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    `
  document.getElementById('wrapper').innerHTML = newPassword
}