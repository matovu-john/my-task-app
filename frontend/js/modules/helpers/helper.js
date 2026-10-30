import {fetchData, uploadTask, deleteTask, updateTask} from "../network/network.js";


export const helper = {
   changeStatus: function (id, status) {
      
      updateTask(id, status)
      .then((res) => {
         
         if (res.ok) {

            const activeTab = document.querySelector('#active');
            activeTab.click();
         }
         
      });
   },
}