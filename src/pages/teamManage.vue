<template>
  <f7-page>
    <f7-navbar title=" " back-link="主要成员" sliding>
    	<f7-nav-right>
	        <f7-link>添加</f7-link>
	    </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="allPeople">
	      <div class="introduceBox fn-clear">
	      	
	      </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
	name:'teamManage',
}
</script>
<style>
	.allPeople{
		background:#fff;
		padding:0 15px;
	}
	.introduceBox{
		background:#fff;
	}
</style>