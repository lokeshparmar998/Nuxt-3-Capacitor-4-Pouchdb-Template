<template>
  <div>
    <div>PouchDb setup</div>
    <div class="button is-primary" @click="addData()">Add Data</div>
     <div class="button is-warning" @click="queryData()">Query</div>
  </div>
</template>
<script>
export default {
  setup() {
    definePageMeta({
      layout: "full-height",
    });
    /*  */
    const { $ticketDB } = useNuxtApp();
    function addData() {
      $ticketDB.put({
        _id: new Date().toISOString(),
        name: "David",
        age: Math.floor(Math.random() * 100),
      });
    }

    async function queryData(){
      try{
        let result = await $ticketDB.getIndexes()
        console.log(result)
      } catch(err){
        console.log(err)
      }
    }
    return {
      addData,
      queryData
    };
  },
};
/* {"client_id":"AvrioTestClient_0","city_id":"AvrioTestClient_0_city_19","building_id":"AvrioTestClient_0_city_19_building_4","category":"AvrioTestClient_0_category_0","applince_id":"AvrioTestClient_0_category_0_appliance_0","update_at":"1662470236","assigned_to":"AvrioTestClient_0_city_19_technician_1","completed_by":"AvrioTestClient_0_city_19_technician_2","completed_at":"1631798236","priority":"high","status":"open","due_date":"1635254236","is_deleted":"false","title":"JSKhkEKh","desciption":"SBydhmmcuvbnlaYPbKbD","comment":{"AvrioTestClient_0_city_19_building_4_3_f78fc520-af19-4db1-a5c5-3041ade08782":"zneOBd","AvrioTestClient_0_city_19_building_4_2_bbb7398a-22fc-4b90-887c-224b5642e25b":"geIwVT"},"created_by":"AvrioTestClient_0_city_19_building_4_0_2a0a1f4c-ba9f-428a-8c81-2b7a34b4681d","last_updated_by":"AvrioTestClient_0_city_19_building_4_0_2bbc46d8-4498-4493-9222-17b43b327438","meta_data":""}	 */
</script>
