function addquantity(){
    var qty = document.getElementById('quantity');
    var tot = document.getElementById('total');
    var cost = document.getElementById('cost');
    
    if(qty==''){
        tot.value = '';
    }
    else{
        tot.value = parseFloat(qty.value) * parseFloat(cost.value);
    }
}

function costperitem(){
    var menu = document.getElementById('menu').value;   
    var cost = document.getElementById('cost');
    if(menu=="espresso"){
        cost.value = '30000';
    }else if(menu=="cappuccino"){
        cost.value = '34000';
    }else if(menu=="americano"){
        cost.value = '45000';
    }else if(menu=="latte"){
        cost.value = '40000';
    }   
}

function discount(){
    var dsc = document.getElementById('dsc');
    var tot = document.getElementById('total')
    var total = tot.value;
    
    tot.value = total * (100-dsc.value)/100;
}

function transaction(){
    var money = document.getElementById('money');
    var change = document.getElementById('change');
    var tot = document.getElementById('total')
    
    change.value = money.value - tot.value;
}

function reset(){
    document.form.reset();
}