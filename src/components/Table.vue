<template>
    <table>
        <tr>
            <th
                v-for="(item, index) in colsAsync"
                :key="index">
                {{ item }}
            </th>
        </tr>
        <tr
            v-for="item in colsAsync"
            :key="item.oid">
            <td>{{ item.oid  }}</td>
            <td>{{ item.latitude }}</td>
            <td>{{ item.longitude }}</td>
            <td>{{ item.count }}</td>
            <td>{{ item.desc1 }}</td>
            <td>{{ item.desc2 }}</td>
            <td>{{ item.desc3 }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.city }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'Table',
    props: {
      cols: {
          type: Array,
          required: true
      },
      data: {
          type: Array,
          required: true
      }
    },
    data: function () {

    },
    computed: {
        colsAsync: function () {
            return this.cols;
        },
        dataAsync: function () {
            return this.data;
        }
    }
}
</script>

<style scoped>

</style>