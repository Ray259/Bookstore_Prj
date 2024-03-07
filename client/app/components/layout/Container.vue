<template>
    <div class="flex flex-row mx-[8rem]">
        <div>
            <div class="flex flex-row mb-8">
                <div class="min-w-[16rem]">
                    <slot name="left"></slot>
                </div>
                <div class="ml-6 min-w-[32rem]">
                    <slot></slot>
                </div>
            </div>
            <slot name="bottom"></slot>
        </div>
        <div class="ml-12">
            <slot name="right"></slot>
        </div>
    </div>
</template>
