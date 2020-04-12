<template>
    <div class="todolist">
        <div class="todolist__text">
            <input type="text" v-model="inputTask" placeholder="Add your task..." v-on:keyup.enter="addTask">
            <button class="button"
            @click='addTask'>Add task</button>
        </div>
        <div class="todolist__tasks">
                <Todotask 
                v-bind:arrayTasks='arrayTasks'/>
        </div>
    </div>
</template>

<script>
import Todotask from './Todotask';

export default {
    components: {
    Todotask
  },
    data() {
        return {
            arrayTasks: [],
            inputTask: ''
        }
    },
    methods: {
        addTask() {
            if(this.inputTask !== '') {
                this.arrayTasks.push({
                    task: this.inputTask,
                    completed: false
                    });
                this.inputTask = '';
            }
        }
    }
}
</script>

<style lang="scss">
    .todolist {
        display: grid;
        grid-template-columns: 50% 50%;
        text-align: center;
        &__text {
            position: relative;
            input {
                outline: none;
                border: 1px solid rgba(107, 177, 227, .5);
                border-radius: 5px;
                width: 200px;
                height: 30px;
                background: rgba(156, 255, 255, 1);
                margin-right: 30px;
                font-size: 13px;
                box-shadow: inset 3px 3px 13px -4px rgba(0,0,0,0.75);
            }
            .button {
                width: 80px;
                height: 35px;
                border-radius: 5px;
                outline: none;
                cursor: pointer;
                background: linear-gradient(90deg, rgba(101,93,240,1) 0%, rgba(58,122,207,1) 7%, rgba(86,221,205,1) 48%, rgba(0,212,255,1) 50%);
                border: none;
                font-size: 16px;
                &:hover {
                    color: #fff;
                    transform: scale(1.1);
                    background: linear-gradient(90deg, rgba(101,93,240,1) 0%, rgba(58,122,207,1) 100%, rgba(86,221,205,1) 100%, rgba(0,212,255,1) 100%);
            }
        }
    }
    }
</style>
