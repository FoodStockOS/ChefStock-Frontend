<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: 'Juan Perez',
        email: 'juanperez@example.com',
        profilePicture: '../assets/assistant.png'
      }
    };
  }
}
</script>

<template>
  <div class ="user-profile" >
    <div class="box">
      <div class="box3">
        <img src="../assets/assistant.png" alt="Profile Picture" style="width: 300px; height: 300px;">
      </div>

      <div class="box2">
        <div class="usuario">
          <label class="block usuario">Usuario</label>
          <input class="form-usuario" type="text" value="Jorge Carlos Lopez Cuadros" disabled>
        </div>
        <div class="email">
          <label class="block email">Correo</label>
          <input class="form-email" type="email" value="jorgelopez@gmail.com" disabled>
        </div>
        <div class="password">
          <label class="block password">Contraseña</label>
          <input class="form-password" type="password" value="**********" disabled>
        </div>
      </div>
    </div>

    <div class="navigation">
      <button>Proveedores</button>
      <button>Productos</button>
      <button>Contacto</button>
    </div>


  </div>
</template>

<style scoped>


.user-profile{
  max-width: 800px;
  margin: auto;
  background-color:#ffff;
  border-radius:10px;
  border: solid 1px #ccc;
  padding: 20px;
  justify-content: center;
  height: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
.box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin:1rem;
  width: 100%;
  align-items: stretch;
  height: 30vh;


}
.box3{
  height: 35vh;
  display: flex;
  align-items: center;
}
.box2{
  width: 80%;
  margin: auto;
  padding: 20px;
  flex-direction: column;
}

.form-usuario,
.form-email,
.form-password {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.navigation {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: flex-end;
}

.navigation button {
  background-color: #ffa500;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
}

.navigation button:hover {
  background-color: #ff9100;
}
</style>