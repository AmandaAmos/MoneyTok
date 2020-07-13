<<<<<<< HEAD
// Login
<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

<div id="id01" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="create">
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>


{/* Create New User */}
<button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">New User</button>

<div id="id02" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div class="container">
      <label for="fname"><b>First Name</b></label>
      <input type="text" placeholder="Enter First Name" name="fname" required>

      <label for="lname"><b>Last Name</b></label>
      <input type="text" placeholder="Enter Last Name" name="lname" required>

      <label for="email"><b>Email Address</b></label>
      <input type="text" placeholder="Enter Email Address" name="email" required>

      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <!--Use location to determine currency and allow currency toggle for the future-->
      <!-- <label for="location"><b>Location</b></label>
      <input type="location" placeholder="Enter Location" name="location" required> -->

      <label for="balance"><b>Balance</b></label>
      <input type="balance" placeholder="Enter Funds Amount" name="balance">
        
      <button type="submit">Send a Verification Email to my Email Address</button>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="create">
    </div>
  </form>
</div>

<script>
 
// Get the modal
var loginModal = document.getElementById('id01');
var newModal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log(event.target, "Is it working?");
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }else if (event.target == newModal) {
      newModal.style.display = "none";
    }
}
</script>
=======
export { default } from "./Register";
export { default } from "./Login";
export { default } from "./Income";
>>>>>>> de4ac0e8189eccc34ef60b1ac087edf3c16b069e
