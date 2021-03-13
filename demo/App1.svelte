<script>
    // configurations
    import { onMount } from 'svelte'
    let t = location.host.split("-")
    let base =  "https://"+t[2]+"/api/v1/web/"+t[0]+"-"+t[1]
        
    // data
    let data = []
    let select = ""

    // retrieve all data
    async function all()  {
      let res = await fetch(base+"/addr/all.json")
      let body = await res.json()
      data = body.data
      console.log(data)
    }

    // init
    onMount(all)


