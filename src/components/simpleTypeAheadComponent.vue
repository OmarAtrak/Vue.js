<template>
    <div class="container mt-5">
        <label for="typeahead1">Votre Sport Préféré</label>
        <div id="search" style="width: 20%; display: inline-block; margin-left: 10px;">
        <vue3-simple-typeahead
            id="typeahead1"
            placeholder="entrez votre choix"
            :items="['football', 'basketball', 'handball','volleyball']"
            :minInputLength="1"
            style="width: 100%;"
        />
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "simpleTypeAhead",
        data() {
        return {
            selected: "",
        };
        },
        methods:{
            selectItems(val:any){
                this.selectItems = val;
            }
        }
    };
</script>