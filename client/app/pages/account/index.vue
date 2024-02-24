<script setup>
</script>

<template>
    <div>
        <Header></Header>
        <div class="flex flex-row font-bold ml-[8rem]">
            <div class="flex-initial w-[50rem] ">
                <div class="font-medium">ACCOUNT INFORMATION</div>
                <div>Hi,</div>
                <div>Recently Order(s)</div>
                <table class="table-fixed">
                    <thead class="border-y text-sm bg-slate-50">
                        <tr>
                            <th class="p-2">order #</th>
                            <th>Date</th>
                            <th>Delivery</th>
                            <th><span class="nobr">Total</span></th>
                            <th>Payment status</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody class="border-b">
                        <th>
                            <td>
                                1
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                3
                            </td>
                            <td>
                                4
                            </td>
                            <td>
                                5
                            </td>
                        </th>
                    </tbody>
                </table>
            </div>
            <div>
                <div>MY ACCOUNT</div>
                <div>Name: </div>
                <div>Address's list</div>
            </div>
        </div>
    </div>
</template>
