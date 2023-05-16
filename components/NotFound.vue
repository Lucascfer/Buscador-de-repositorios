<script setup>
</script>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 20 20">
          <path fill="#FF0000" fill-rule="evenodd"
            d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm0-12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
            clip-rule="evenodd" />
        </svg>

        <div class="modal-header">
          <h3 name="header">
            Desculpe!
          </h3>
        </div>

        <div class="modal-body">
          <p name="body">
            Não foi possível encontrar o repositório ou usuário desejado!
          </p>
        </div>

        <div class="modal-footer">
          <div name="footer">
            <button class="modal-default-button" @click="$emit('close')">
              Certo
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 370px;
  height: 447px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: block;
}

.modal-header {
  text-align: center;
  font-size: 48px !important;
  font-weight: bold;
}

.modal-header i {
  font-weight: bold;
  color: #FF0000;
  font-size: 48px !important;
}

.modal-header h3 {
  margin-top: 25px;
  font-size: 48px !important;
}

.modal-body {
  margin: 50px 0;
  text-align: center;
}

.modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.modal-default-button {
  float: center;
  height: 72px;
  width: 194px;
  border-radius: 10px;
  background-color: #FF0000;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}</style>