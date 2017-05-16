// client state tree
export default ({
	"adminPage":{
		"colModel":[
		    { label: 'OrderID', name: 'OrderID', key: true, width: 75 },
		    { label: 'Customer ID', name: 'CustomerID', width: 200 },
		    { label: 'Order Date', name: 'OrderDate', width: 200 },
		    { label: 'Freight', name: 'Freight', width: 200 },
		    { label:'Ship Name', name: 'ShipName', width: 200 }
		]
	},
	"viewControl":{
		"isFullPageTableView": false,
		"isSummaryView": false,
		"isHeaderHidden": true,
		"isSOInfoHidden":true
	},
	"singleBlockViewProps":{
		"currentPosition": 10,
		//help to find the postion of the block
		// from using ex.[2,3]
		"blocksPositionArr":[]
	},
	"traveler":{
		"traveler_id": 0,
		"serial_num":"D1646B03816",
		"traveler_template_id": 0,
		"isComplete":false,
		"reviewBy": "",
		"reviewDate": "",
		"status": "inComplete"
	}
	,
	"sales_order_info":{
		"sales_order_num": 115157,
		"product_name": "VAR INIZIO 8110 2.0 NO SSD (P1003094003)",
		"customer_num": "VAR01/VAR04/VAR07",
		"apt_pn_num": "21-VB1050-6002"
	},	
	"traveler_template":{
		"traveler_template_id": 0,
		"blueprint":[
			{
				"description": "RMA Verification Process",
				"blocks": [0,1]
			},
			{
				"description": "Power On to test all Ethernet LEDs on then off",
				"blocks": [2]
			},
			{
				"description": "LED Check",
				"blocks": [3]
			},
			{
				"description":"Power On to test all Ethernet LEDs on then off",
				"blocks": [4]
			},
			{
				"description":"FAN verification:",
				"blocks": [5,6, 7]
			},
			{
				"description":"BOOT UP Verification",
				"blocks": [11, 8, 12]
			},
			{
				"description":"Console Signal Verification",
				"blocks": [9]
			},
			{
				"description":"SSD",
				"blocks":[13, 10, 14]
			},
			{
				"description":"DIMM Memory Verification",
				"blocks":[15, 16]
			}
		],
		"blocksHeaderOrder": ["Description","Action","Error","Process Record"],
		"building_blocks":[0,1,2,3,4,5]
	},
	"record_blocks":[
		{
			"traveler_id": 0,
			"blocks_id": 0,
			"description": "Top Cover",
			"action":"Scan Good or Scratch",
			"error":"Replace Top Cover",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Disposition",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 1,
			"description": "Bottom Chassis",
			"action":"Scan Good or Scratch",
			"error":"Replace bottom chassis",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Disposition",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 2,
			"description": "Check Power Adapter on and lit solid green",
			"action":"Scan Passed or Failed > PSU type > UL version > SN > 0 Volt or Fluctuating Voltage",
			"error":"PSU not returned or 0 Volt or Fluctuating Voltage",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Analysis Process Note",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 3,
			"description": "Verify Power On and PWR LED lit green",
			"action":"Scan Passed or Failed or RTV or 2nd RTV or CAS",
			"error":"",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Analysis Process Note",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 4,
			"description": "Check Power Adapter ON and lit solid green",
			"action":"Scan Passed or Failed > PSU type > UL version > SN > 0 Volt or Fluctuating Voltage",
			"error":"Defective PSU output 0 Volt or fluctuating voltage",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Analysis Process Note",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 5,
			"description": "Verify Fan older than 1 years or not",
			"action":"Scan Yes or No",
			"error":"Replace 1 year Fan",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Disposition",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 6,
			"description": "Defective Fan",
			"action":"...",
			"error":"Replace Defective Fan",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Disposition",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 7,
			"description": "Dusty Fan",
			"action":"...",
			"error":"Replace Dusty Fan",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Disposition",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 8,
			"description": "Avaliable MAC Address",
			"action":"Scan Yes or No",
			"error":"No avaliable MAC address error.",
			"process_record": [
				{
					"type": "bool_button",
					"bool_option":{
						"true": "Yes",
						"false": "No"
					},
					"action_type":"Disposition",
					"result": undefined,
					"check_box":true
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 9,
			"description": "Verify Console accepting keyboard input in Putty",
			"action":"Scan Yes or No",
			"error":"",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Passed",
						"Failed",
						"RTV",
						"2ndTRV",
						"CAS"
					],
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 10,
			"description": "SSD 150 Drive",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Silver",
						"Black",
						"No"
					],
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 11,
			"description": "Uboot version",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "input",
					"des": "Uboot version",
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 12,
			"description": "OS version",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "input",
					"des": "OS version",
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 13,
			"description": "SSD Model",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "input",
					"des": "SSD MPN",
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 14,
			"description": "SSD Model Serial Number",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "input",
					"des": "SSD SN",
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 15,
			"description": "DIMM Memory Model",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "input",
					"des": "DIMM MPN",
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		},
		{
			"traveler_id": 0,
			"blocks_id": 16,
			"description": "DIMM Memory Model Serial Number",
			"action":"...",
			"error":"",
			"process_record": [
				{
					"type": "input",
					"des": "DIMM SN SN",
					"action_type":"Disposition",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": [2]
		}
	],
	// "history":[
	// 	{
	// 		"history_id": 0,
	// 		"traveler_id": 0,
	// 		"record_blocks_id": 0,
	// 		"description": "Visual Inspection chassis cosmetic before assembly...",
	// 		"qty": null,
	// 		"process_record": [
	// 			{
	// 				"check_box":true
	// 			}
	// 		],
	// 		"responsible": "",
	// 		"date": "type is date",
	// 		"edit": "type is date"
	// 	},
	// 	{
	// 		"history_id": 1,
	// 		"traveler_id": 0,
	// 		"record_blocks_id": 1,
	// 		"description": "(R) AVAN-4184B One Shoebox W/350W PS",
	// 		"qty": 1,
	// 		"process_record": [
	// 			{
	// 				"check_box":true
	// 			}
	// 		],
	// 		"responsible": "",
	// 		"date": "type is date",
	// 		"edit": "type is date"
	// 	}
	// ]
	
})