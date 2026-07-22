function nextpage(){
    window.location.href="second.html";
}
function SuggestMedicine(symptom){
    let medicine="";
    if(symptom == "Fever"){
        medicine="Paracetamol (Acetaminophen) / Dolo 650";
    }
    else if(symptom == "Running Nose"){
        medicine="Combination Cold Tablets (e.g., Cheston Cold, D Cold Total, Solvin Cold )";
    }
    else if(symptom == "Dehydration"){
        medicine="ORS (Oral Rehydration Solution)";
    }
    else if(symptom == "Headache"){
        medicine="Ibuprofen (Advil/Motrin)";
    }
    else if(symptom == "Digestion"){
        medicine="Domperidone";
    }
    
    document.getElementById("result").innerText="SuggestMedicine:"+medicine;
}
 function welcometovc(){
    window.location.href = "welcome page.html";
}
function entervc(){
    window.location.href = "doctor.html"
}
function endCall(){
    alert("Thank You!!!");
}
function after(){
    window.location.href="after.html"
}