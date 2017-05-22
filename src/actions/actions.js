export const PRINT_HELLO = 'PRINT_HELLO';
export const SET_ISCOMPLETE = 'SET_ISCOMPLETE';
export const ISFULLPAGETABLEVIEW = 'ISFULLPAGETABLEVIEW';
export const ISSUMMARYVIEW = 'ISSUMMARYVIEW';
export const ISHEADERHIDDEN = 'ISHEADERHIDDEN';
export const ISSOINFOHIDDEN = 'ISSOINFOHIDDEN';
export const ISCASMODALVIEW = 'ISCASMODALVIEW';

export const SET_SINGLEBLOCKVIEWPOSITION = 'SET_SINGLEBLOCKVIEWPOSITION';
export const SET_CURRENTBLOCKPOSITION = 'SET_CURRENTBLOCKPOSITION';
export const SET_BLOCKSPOSITIONARR = 'SET_BLOCKSPOSITIONARR';
export const SET_RECORDRESULT = 'SET_RECORDRESULT';
export const SET_ANALYSISPROCESSNOTE = 'SET_ANALYSISPROCESSNOTE';


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

export function setRecordResult(input){
	return{
		type: SET_RECORDRESULT,
		input
	}
}

export function setAnalysisProcessNote(input){
	return {
		type: SET_ANALYSISPROCESSNOTE,
		input
	}
}