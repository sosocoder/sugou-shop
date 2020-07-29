var zqEmailDiv = document.getElementById("nei1_mali_1");
		var zqPhoneDiv = document.getElementById("nei1_mali_2"); 
		var oBtnEmail = document.getElementById("zq_emali");
		var oBtnPhone = document.getElementById("zq_phone");
		var top1 = document.getElementById("nei1_top1");
		var top2 = document.getElementById("nei1_top2");
		var oZq_check = document.getElementById("zq_checkbox");
		var flag = true;
		var oZq_input = document.getElementsByName("zq_input");
		var str = "请输入邮箱地址";

		for(var j = 0;j<oZq_input.length;j++){
			(function(j){
				oZq_input[j].onfocus = function(){
					if(oZq_input[j].value){
						oZq_input[j].value="";
						oZq_input[j].style.color="#000";
						if(j==1||j==2){
							oZq_input[j].type="password";
						}
					}
				}
				oZq_input[j].onblur = function(){
					if(!oZq_input[j].value){
						oZq_input[j].value="请输入邮箱地址";
						oZq_input[j].style.color="#ccc";
					}
				}
			})(j);
		}
		oZq_check.onclick = function(){
			if(flag){
				oBtn.style.backgroundColor="#d50f1f";
				flag=false;
			}else{
				oBtn.style.backgroundColor="#aeaeae";
				flag=true;
			}	

		}
		oBtnPhone.onclick = function(){
			top1.style.color="#eee"
			top2.style.color="#000";
			zqEmailDiv.style.display="none";
			zqPhoneDiv.style.display="block";
		}
		oBtnEmail.onclick = function(){
			top2.style.color="#eee"
			top1.style.color="#000"
			zqPhoneDiv.style.display="none";
			zqEmailDiv.style.display="block";
		}
		var oSpan = document.getElementById("a");
		var oIput = document.getElementById("b");
		var oBtn = document.getElementById("agree");
		function createCode(len){
			var seed = new Array(
					'abcdefghijklmnopqrstuvwxyz',
					'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
					'0123456789'
				);
			var idx,i;
			var result = "";
			for(i=0;i<len;i++){
				idx = Math.floor(Math.random()*3);
				result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)),1);
			}
			return result;
		}
		var oIput1 = document.getElementById("content");
		function tes(){
			var autoStr = oSpan.innerHTML.toUpperCase();
			var inputStr = oIput1.value.toUpperCase();
			if(autoStr==inputStr){
				window.location="login.html"
			}else{
				alert("验证码错误");
				window.location="zhuce.html"
			}
		}
		oSpan.innerHTML = createCode(4);
		oIput.onclick = function (){
			oSpan.innerHTML = createCode(4);
		}
		oBtn.onclick = function(){
			if(!flag){
				tes();
			}
			
		}
		function logbtn(){
			window.location="index.html"
		}
		
