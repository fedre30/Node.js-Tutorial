<template>
	<div class="tuto-task">
		<div class="task-name"><span>{{index}}.</span> {{task.title}}</div>
	</div>
</template>

<script>
export default {
	name: 'tuto-task',

	props: {
		index: Number,
		task: Object,
	},
}
</script>

<style lang="sass">
.tuto-task
	margin: 4px
	padding: 5px 10px
	border: 1px solid #ccc
	border-radius: 3px
	background: #fafafa
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)

	.task-name
		span
			font-size: 11px
			font-weight: 600
			color: #ccc
</style>

