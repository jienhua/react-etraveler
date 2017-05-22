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
		"isFullPageTableView": true,
		"isSummaryView": false,
		"isHeaderHidden": true,
		"isSOInfoHidden": true,
		"isCASModalView": false
	},
	"singleBlockViewProps":{
		"currentPosition": 0,
		//help to find the postion of the block
		// from using ex.[2,3]
		//"blocksPositionArr":[]
	},
	"traveler":{
		"traveler_id": 0,
		"serial_num":"D1646B03816",
		"traveler_template_id": 0,
		"isComplete":false,
		"review_by": "",
		"review_date": "",
		"status": "inComplete",
		"analysis_process_note": ''
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
				"station":1,
				"objects":[
					{
						"description": "RMA Verification Process",
						"blocks": [18,0,1]
					},
					{
						"description": "Power On to test all Ethernet LEDs on then off",
						"blocks": [19,2]
					},
					{
						"description": "LED Check",
						"blocks": [3]
					},
					{
						"description":"FAN verification:",
						"blocks": [5,6, 7]
					},
					{
						"description":"Console Signal Verification",
						"blocks": [9]
					},
					{
						"description":"BOOT UP Verification",
						"blocks": [11, 8, 12]
					},
					{
						"description":"SSD Verification",
						"blocks":[13, 14, 10]
					},
					{
						"description":"DIMM Memory Verification",
						"blocks":[15, 16]
					}
				]
			},
			{
				"station": 2,
				"objects":[
					{
						"description": "After repair / replacement, perform PAN requirement test",
						"blocks":[20, 21, 22,23, 24,25,26, 27,28,29,30,31,32,33,34]
					}
				]
			},
			{
				"station": 3,
				"objects":[
					{
						"description": "Refurbishing Process",
						"blocks": [35]
					}
				]
			},
			{
				"station": 4,
				"objects":[
					{
						"description": "Capture Log",
						"blocks": [36]
					}
				]
			},
			{
				"station":5,
				"objects":[
					{
						"description":"Packing",
						"blocks":[17]
					}
				]
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
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Replace Top Cover"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 1,
			"description": "Bottom Chassis",
			"action":"Scan Good or Scratch",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Replace bottom chassis"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 2,
			"description": "Check Power Adapter on and lit solid green",
			"action":"Scan Passed or Failed > PSU type > UL version > SN > 0 Volt or Fluctuating Voltage",
			"action_type":"Analysis Process Note",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Passed",
						"Failure 0V",
						"Fluctuation"
					],
					"error_options":{
						"Failure 0V": "Failure 0V",
						"Fluctuation": "Fluctuation Voltage"
					},
					"result": undefined,
				},
				{
					"type": "input",
					"des": "PSU Type",
					"result": undefined,
				},
				{
					"type": "input",
					"des": "UL Ver.",
					"result": undefined,
				},
				{
					"type": "input",
					"des": "SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 3,
			"description": "Verify Power On and PWR LED lit green",
			"action":"Scan Passed or Failed or RTV or 2nd RTV or CAS",
			"action_type":"Analysis Process Note",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 5,
			"description": "Verify Fan older than 1 years or not",
			"action":"Scan Yes or No",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Replace 1 year Fan"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 6,
			"description": "Defective Fan",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Replace Defective Fan"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 7,
			"description": "Dusty Fan",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Replace Dusty Fan"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 8,
			"description": "Avaliable MAC Address",
			"action":"Scan Yes or No",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "No avaliable MAC address error"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 9,
			"description": "Verify Console accepting keyboard input in Putty",
			"action":"Scan Yes or No",
			"action_type":"Disposition",
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
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 10,
			"description": "SSD 150 Drive",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Silver",
						"Black",
						"No"
					],
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 11,
			"description": "Uboot version",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "input",
					"des": "Uboot version",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 12,
			"description": "OS version",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "input",
					"des": "OS version",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 13,
			"description": "SSD Model",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "input",
					"des": "SSD MPN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 14,
			"description": "SSD Model Serial Number",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "input",
					"des": "SSD SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 15,
			"description": "DIMM Memory Model",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "input",
					"des": "DIMM MPN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 16,
			"description": "DIMM Memory Model Serial Number",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "input",
					"des": "DIMM SN SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 17,
			"description": "Packing",
			"action":"...",
			"process_record": [
				{
					"type": "input",
					"des": "PSU MPN",
					"result": undefined,
				},
				{
					"type": "input",
					"des": "PSU SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 18,
			"description": "Warranty Label",
			"action_type":"Analysis Process Note",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Missing Warranty Label"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 19,
			"description": "PSU returned?",
			"action_type":"Analysis Process Note",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Customer did not return PSU"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 20,
			"description": "Reload CastWell U-Boot for testing",
			"action":"...",
			"action_type":"Disposition",
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
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 21,
			"description": "Verify CVER 3.2.3 Burn In Test 12 hours",
			"action":"...",
			"action_type":"Disposition",
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
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 22,
			"description": "Perform DOD Wipeout (SSD)",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Passed",
						"Failed"
					],
					"error_options":{
						"Failed": "SSD failed DOD with duplicator"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 23,
			"description": "Cloning PAN OS 7.1.5 (SSD)",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Passed",
						"Failed"
					],
					"error_options":{
						"Failed": "SSD failed Copy and Compare with duplicator"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 24,
			"description": "Replace SSD",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "replaceInput",
					"des": "Old SSD SN",
					"result": undefined,
				},
				{
					"type": "replaceInput",
					"des": "New SSD SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 25,
			"description": "Drive Model installed",
			"action":"...",
			"process_record": [
				{
					"type": "input",
					"des": "MPN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 26,
			"description": "Drive Serial Number installed",
			"action":"...",
			"process_record": [
				{
					"type": "input",
					"des": "SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 27,
			"description": "Reflash U-Boot 7.1.5 and reimage PAN OS 7.1.5",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Yes",
						"No"
					],
					"error_options":{
						"No": "Reflash U-Boot 7.1.5 and reimage PAN OS 7.1.5"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 28,
			"description": "DIMM test result",
			"action":"...",
			"action_type":"Analysis Process Note",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Passed",
						"Failed"
					],
					"error_options":{
						"Failed":"DIMM confirmed defective with a known good system"
					},
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 29,
			"description": "Supertalent DIMM",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "replaceInput",
					"des": "Old DIMM SN",
					"result": undefined,
				},
				{
					"type": "replaceInput",
					"des": "New DIMM SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 30,
			"description": "Replace DIMM",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "replaceInput",
					"des": "Old DIMM SN",
					"result": undefined,
				},
				{
					"type": "replaceInput",
					"des": "New DIMM SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 31,
			"description": "Installed DIMM Model",
			"action":"...",
			"process_record": [
				{
					"type": "input",
					"des": "MPN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 32,
			"description": "Installed DIMM Serial Number",
			"action":"...",
			"process_record": [
				{
					"type": "input",
					"des": "SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 33,
			"description": "Verify MGT and NIC ports",
			"action":"...",
			"action_type":"Disposition",
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
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 34,
			"description": "Verify Power, Status, Fan, Temp, HA and Alarm LEDs",
			"action":"...",
			"action_type":"Disposition",
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
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 35,
			"description": "Replace SSD",
			"action":"...",
			"process_record": [
				{
					"type": "input",
					"des": "MAC Address",
					"result": undefined,
				},
				{
					"type": "input",
					"des": "Internal Green SN",
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
		},
		{
			"traveler_id": 0,
			"blocks_id": 36,
			"description": "Capture Log",
			"action":"...",
			"action_type":"Disposition",
			"process_record": [
				{
					"type": "multi_button",
					"option":[
						"Done",
						"No"
					],
					"result": undefined,
				}
			],
			"responsible": "",
			"date": "type is date",
			"edit": "type is date",
			"history": []
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