function validarFormulario(){
    const txtNombre = document.getElementById('txtNombre')
    const txtApellido = document.getElementById('txtApellido')
    const rbSexo = document.getElementsByName('sexo')
    const txtDescripcion = document.getElementById('txtDescripcion')
    const selectDeportes = document.getElementById('deporte')

    if(txtNombre.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese un nombre.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false
    }

    if(txtApellido.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese un apellido.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false
    }

    let algunoCheckeado = false
    for(let i = 0; i<rbSexo.length; i++){
        if(rbSexo[i].checked){
            algunoCheckeado = true
            break
        }
        
    }

    if (algunoCheckeado == false) {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor seleccione un sexo.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false
    }

    if(txtDescripcion.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese una descripcion.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return false
    }

    Swal.fire({
        title: 'Genial!',
        text: 'La validacion fue correcta.',
        icon: 'success',
        confirmButtonText: 'OK'
    })
    return true
    
}

function guardar(){
    if(validarFormulario()){
        Swal.fire({
            title: 'Genial!',
            text: 'Se ha cargado correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'Faltan datos que completar.',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}