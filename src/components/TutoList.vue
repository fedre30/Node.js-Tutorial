<template>
	<div class="tuto-list">
		<tuto-task v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index + 1" />

		<form class="task-form" @submit="addTask">
			<input v-model="newTaskName" placeholder="Type here the description of your next task...">
		</form>
	</div>
</template>

<script>
import TutoTask from './TutoTask.vue';

export default {
	name: 'tuto-list',

	components: { TutoTask },

	data() {
		return {
			newTaskName: '',
		};
	},

	methods: {
		addTask(ev) {
			ev.preventDefault();
			ev.stopPropagation();

			if (this.newTaskName.trim().length == 0) return;

			// TODO: add task to local list and server

			return false;
		}
	},

	props: {
		tasks: Array,
	},
}
</script>

<style lang="sass">
.tuto-list
	background-color: #efefef
	border: 1px solid #cfcfcf
	border-radius: 4px
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)
	width: 600px
	margin-left: calc(50% - 300px)

	.task-form
		input
			box-sizing: border-box
			margin: 0 4px 6px 4px
			width: calc(100% - 8px)
			outline: none
			padding: 4px 10px 4px 24px
			font-size: 14px
			background: transparent
			border: none
</style>

