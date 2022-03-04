let btnSubmit= document.getElementById("btnSubmit");



function enable(){
    document.getElementById("medicationInput").disabled = false;
}



function disable(){
    document.getElementById("medicationInput").disabled = true;
}



btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault()

    let FirstName = document.querySelector('#FirstName').value;
    let MiddleName = document.querySelector('#MiddleName').value;
    let LastName = document.querySelector('#LastName').value;
    let address = document.querySelector('#address').value;
    let Birthday = document.querySelector('#Birthday').value;
    let ConNumber = document.querySelector('#ConNumber').value;
    let Gender = document.querySelector('input[name="gender"]:checked').value;
    let Medication = document.querySelector('input[name="medication"]:checked').value;
    let MedicationDetails = document.querySelector('#medicationInput').value;


    let CurrentSymptoms = document.querySelectorAll('#CurrentSymptoms option:checked');
    const CurrentSymptomsValues = Array.from(CurrentSymptoms).map(el => el.value);

    console.log(CurrentSymptomsValues);






//Checkbox
    let medicalHistory =[];
    let D1 =   document.querySelector('#medicalHistory-0');
    let D2 =   document.querySelector('#medicalHistory-1');
    let D3 =   document.querySelector('#medicalHistory-2');
    let D4 =   document.querySelector('#medicalHistory-3');
    let D5 =   document.querySelector('#medicalHistory-4');
    let D6 =   document.querySelector('#medicalHistory-5 ');
    let D7 =   document.querySelector('#medicalHistory-6 ');

    if(D1.checked){
        medicalHistory.push(D1.value);
    }
    if(D2.checked){
        medicalHistory.push(D2.value);
    }
    if(D3.checked){
        medicalHistory.push(D3.value);
    }
    if(D4.checked){
        medicalHistory.push(D4.value);
    }
    if(D5.checked){
        medicalHistory.push(D5.value);
    }
    if(D6.checked){
        medicalHistory.push(D6.value);
    }
    if(D7.checked){
        medicalHistory.push(D7.value);
    }
    console.log(medicalHistory);



















    //store RadioMed in a object
    let PatientRecords = {

        FirstName: FirstName,
        MiddleName: MiddleName,
        LastName: LastName,
        address: address,
        Birthday: Birthday,
        ConNumber: ConNumber,
        Gender:Gender,
        Medication:Medication,
        MedicalHistory:medicalHistory,
        MedicationDetails:MedicationDetails,
        CurrentSymptoms:CurrentSymptomsValues

        }


        //store PatientRecords in local storage
        localStorage.setItem('PatientRecords',JSON.stringify(PatientRecords));



})