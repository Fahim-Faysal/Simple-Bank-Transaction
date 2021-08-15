document.getElementById('depo-btn').addEventListener('click',function(){
      const depoText = document.getElementById('depo-text')
      const depoTextValue = depoText.innerText;
      const depostie = document.getElementById('depo')
      const depoTextField = depostie.value;
      const finalDeposite = parseFloat(depoTextField) + parseFloat(depoTextValue)
      depoText.innerText=finalDeposite;

      //total value calculation
      const total =  document.getElementById('total')
      const totalText = total.innerText;
      total.innerText = parseFloat(totalText) + parseFloat(depoTextField)
      depostie.value=''   
})


document.getElementById('with-btn').addEventListener('click',function(){
      const withText = document.getElementById('with-text')
      const withTextValue = withText.innerText;
      const withdrew = document.getElementById('with')
      const withTextField = withdrew.value;
      const finalWithdrew = parseFloat(withTextField) + parseFloat(withTextValue)
      withText.innerText = finalWithdrew;

      //withdrew calculation in total value
      const total =  document.getElementById('total')
      const totalText = total.innerText;
      total.innerText = parseFloat(totalText) - parseFloat(withTextField) 
      withdrew.value = ''
      
})
