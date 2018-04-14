function $(selector) {
    return document.querySelector(selector)
  }
  //点击登录or注册
   $('header .login').onclick = function(e){
        e.stopPropagation()
        $('.flip-modal').classList.add('show')
      }
   //事件代理，绑定事件，实现点击翻转or关闭
  $('.flip-modal').addEventListener('click',function(e){
    e.stopPropagation()
    if(e.target.classList.contains('login')){
      $('.flip-modal').classList.remove('register')
      $('.flip-modal').classList.add('login')
    }
    if(e.target.classList.contains('register')){
      $('.flip-modal').classList.add('register')
      $('.flip-modal').classList.remove('login')
    }
     if(e.target.classList.contains('close')){
          $('.flip-modal').classList.remove('show')
        }
  })
  document.addEventListener('click', function(){
        $('.flip-modal').classList.remove('show')
      })
  //登录输入提示和错误提示
  $('.modal-login form').addEventListener('submit', function(e){
    e.preventDefault()
    if(!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)){
      $('.modal-login .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
      return false
    }
    if(!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)){
      $('.modal-login .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线'
      return false
    }
    this.submit()      
  })
  
  //注册输入提示和错误提示
  $('.modal-register form').addEventListener('submit', function(e){
    e.preventDefault()
    if(!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)){
      $('.modal-register .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
      return false
    }
    if(/^north$|^xiaobei$/.test($('.modal-register input[name=username]').value)){
      $('.modal-register .errormsg').innerText = '用户名已存在'
      return false
    }
    if(!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)){
      $('.modal-register .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线'
      return false
    }
    if($('.modal-register input[name=password]').value !== $('.modal-register input[name=password2]').value){
      $('.modal-register .errormsg').innerText = '两次输入的密码不一致'
      return false
    }
    this.submit()      
  })
  