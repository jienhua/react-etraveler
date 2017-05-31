export const PRINT_HELLO = 'PRINT_HELLO';

export const ISFULLPAGETABLEVIEW = 'ISFULLPAGETABLEVIEW';
export const ISSUMMARYVIEW = 'ISSUMMARYVIEW';
export const ISHEADERHIDDEN = 'ISHEADERHIDDEN';
export const ISSOINFOHIDDEN = 'ISSOINFOHIDDEN';
export const ISCASMODALVIEW = 'ISCASMODALVIEW';

export const SET_SINGLEBLOCKVIEWPOSITION = 'SET_SINGLEBLOCKVIEWPOSITION';
export const SET_CURRENTBLOCKPOSITION = 'SET_CURRENTBLOCKPOSITION';
export const SET_BLOCKSPOSITIONARR = 'SET_BLOCKSPOSITIONARR';

// Record_blocks
export const SET_RECORDRESULT = 'SET_RECORDRESULT';
export const SET_RECORDDATETIME = 'SET_RECORDDATETIME';
export const SET_RECORDRESPONSIBLE = 'SET_RECORDRESPONSIBLE';


// Traveler
export const SET_ISCOMPLETE = 'SET_ISCOMPLETE';
export const SET_ANALYSISPROCESSNOTE = 'SET_ANALYSISPROCESSNOTE';
export const SET_SERIALNUMBER = 'SET_SERIALNUMBER';

// Sales order INFO
export const SET_SALESORDERNUMBER = 'SET_SALESORDERNUMBER';
export const SET_PRODUCTNAME = 'SET_PRODUCTNAME';
export const SET_CUSTOMERNUMBER = 'SET_CUSTOMERNUMBER';
export const SET_APTPNNUMBER = 'SET_APTPNNUMBER';

export function addNum(input) {
	return {
		type: PRINT_HELLO,
		input
	}
}

export function isFullPageTableView(){
	return {
		type: ISFULLPAGETABLEVIEW
	}
}

export function isSummaryView(){
	return {
		type: ISSUMMARYVIEW
	}
}

export function isCASModalView(){
	return {
		type: ISCASMODALVIEW
	}
}

export function isHeaderHidden(){
	return {
		type: ISHEADERHIDDEN
	}
}

export function isSOInfoHidden(){
	return {
		type: ISSOINFOHIDDEN
	}
}

export function setIsComplete(){
	return {
		type: SET_ISCOMPLETE
	}
}

export function setSingleBlockViewPosition(index){
	return {
		type: SET_SINGLEBLOCKVIEWPOSITION,
		index
	}
}

export function setCurrentBlockPosition(input){
	return {
		type: SET_CURRENTBLOCKPOSITION,
		input
	}
}

export function setBlocksPositionArr(arr){
	return {
		type: SET_BLOCKSPOSITIONARR,
		arr
	}
}

// Record_blocks
export function setRecordResult(input){
	return{
		type: SET_RECORDRESULT,
		input
	}
}

export function setRecordDatetime(input){
	return {
		type: SET_RECORDDATETIME,
		input
	}
}

export function setRecordResponsible(input){
	return {
		type: SET_RECORDRESPONSIBLE,
		input
	}
}

export function setAnalysisProcessNote(input){
	return {
		type: SET_ANALYSISPROCESSNOTE,
		input
	}
}

export function setSerialNumber(input){
	return {
		type: SET_SERIALNUMBER,
		input
	}
}


// Sales order INFO
export function setSalesOrderNumber(input){
	return {
		type: SET_SALESORDERNUMBER,
		input
	}
}

export function setProductName(input){
	return {
		type: SET_PRODUCTNAME,
		input
	}
}

export function setCustomerNumber(input){
	return {
		type: SET_CUSTOMERNUMBER,
		input
	}
}

export function setAPTPNNumber(input){
	return{
		type: SET_APTPNNUMBER,
		input
	}
}


// API

export function saveETraveler(input){
	return (dispatch, getState) =>{
		// const state = getState();
		//axios.post('url',{
		// post data,	
		//})
		//.then(res =>{
		//	dispatch(actions)
		//})
		//.catch(err =>{})
	};
}