<template>
<div class="tasks_box">
    <div class="filter_buttons">
        <p class="total">{{ (filter === 'all') ? 'All tasks: ' + arrayTasks.length : ''  }} {{ (filter === 'completed') ? 'Completed tasks: ' + completedTasks : ''  }} {{ (filter === 'active') ? 'Active tasks: ' + activeTasks : '' }}</p>
            <button class="all"
            :class="{active_btn: filter === 'all'}"
            @click="filter = 'all'">All</button>
            <button class="active"
            :class="{active_btn: filter === 'active'}"
            @click="(filter = 'active', activeFind())">Active</button>
            <button class="completed"
            :class="{active_btn: filter === 'completed'}"
            @click="(filter = 'completed', completedFind())">Completed</button>
            <button
            @click="deleteAll"
            class="delete_btn">Delete all</button>
    </div>

    <ul>
        <li v-for='(el, index) in arrayTasksFiltered' :key='index' 
        class="task" 
        :class='{ donetask : el.completed }'>
                <input type="checkbox" class="done"
                v-model="el.completed">
                <span>{{el.task}}</span>
                <button class="remove" 
                @click='removeTask($event, index)'>X</button>
        </li>
    </ul>
</div>
</template>

<script>

export default {
    props: ['arrayTasks'],
    data() {
        return {
            completedTasks: 0,
            activeTasks: 0,
            filter: 'all',
        }
    },
    methods: {
       removeTask(e, index) {
           this.arrayTasks.splice(index, 1);
       },
       deleteAll() {
           this.filter = 'all';
           this.arrayTasks.splice(0, this.arrayTasks.length)
       },
       completedFind() {
           let completedCounter = this.arrayTasks.filter(el => el.completed)
           this.completedTasks = completedCounter.length;
       },
       activeFind() {
           let activeCounter = this.arrayTasks.filter(el => !el.completed)
           this.activeTasks = activeCounter.length;
       }
   },
   computed: {
       arrayTasksFiltered() {
           if(this.filter === 'all') {
              return this.arrayTasks;
           } else if (this.filter === 'active') {
               return this.arrayTasks.filter(el => !el.completed);
           } else if (this.filter === 'completed') {
               return this.arrayTasks.filter(el => el.completed);
           }
           return this.arrayTasks;
       }
   },
}
</script>

<style lang="scss">
ul {
    margin: 0;
}
    .task {
        background: #fff;
        list-style: none;
        min-height: 50px;
        height: max-content;
        border-radius: 5px;
        margin-bottom: 10px;
        width: 500px;
        box-shadow: 6px 6px 28px 0px rgba(0,0,0,0.75);
        position: relative;
        display: flex;
        align-items: center;
        .done {
            position: relative;
            visibility: hidden;
            margin-right: 20px;
            margin-left: 10px;
            &:after {
                content: '';
                position: absolute;
                background: #fff;
                border: 1px solid #000;
                visibility: visible;
                height: 15px;
                width: 15px;
                border-radius: 3px;
                cursor: pointer;
            }
        }
        .remove {
            background: #ff6e66;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            position: absolute;
            right: 5px;
            top: calc(50% - 8px); 
            outline: none;
        }
    }
    .donetask {
        background: rgba(144, 250, 130, .8);
        .done {
            &:before {
                content: url('../images/done-icon.svg');
                visibility: visible;
                width: 13px;
                height: 15px;
                display: block;
                position: absolute;
                z-index: 1;
                left: 2px;
                top: 2px;
                cursor: pointer;
            }
        }
        span {
            text-decoration: line-through;
            color: #9c9c9c;
        }
    }
    .filter_buttons {
            margin-bottom: 30px;
            position: relative;
            .total {
                position: absolute;
                top: -65px;
                left: 50%;
                color: #5c5c5c;
            }
            .all,
            .active,
            .completed {
                cursor: pointer;
                background: linear-gradient(90deg, rgba(166,162,241,1) 0%, rgba(136,237,252,1) 100%, rgba(86,221,205,1) 100%, rgba(0,212,255,1) 100%);
                border: none;
                outline: none;
                border-radius: 5px;
                margin-right: 10px;
                height: 25px;
                &:hover {
                    color: #fff;
                    background: linear-gradient(90deg, rgba(101,93,240,1) 0%, rgba(58,122,207,1) 100%, rgba(86,221,205,1) 100%, rgba(0,212,255,1) 100%);

                }
            }
            .all {
                width: 50px;
            }
            .active {
                width: 60px;
            }
            .completed {
                width: 80px;
            }
            .active_btn {
                background: #a3a3a3;
                &:hover {
                    color: #000;
                    background: #a3a3a3;
                    cursor: auto;
                }
            }
            .delete_btn {
                height: 25px;
                width: 80px;
                border: none;
                outline: none;
                border-radius: 5px;
                background: #ff8585;
                cursor: pointer;
                &:hover {
                    color: #fff;
                    background: #ff3030;
                }
            }
        }
</style>