report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20230719-123531\\backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://tareenity.com/services/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -22795
          },
          "rawMisMatchPercentage": 7.482819417400487,
          "misMatchPercentage": "7.48",
          "analysisTime": 261
        },
        "diffImage": "..\\bitmaps_test\\20230719-123531\\failed_diff_backstop_default_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_1_Desktop.png",
        "test": "..\\bitmaps_test\\20230719-123531\\backstop_default_BackstopJS_Homepage_0_document_1_Desktop.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_Desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://tareenity.com/services/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "Desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6571
          },
          "rawMisMatchPercentage": 7.586986666666666,
          "misMatchPercentage": "7.59",
          "analysisTime": 312
        },
        "diffImage": "..\\bitmaps_test\\20230719-123531\\failed_diff_backstop_default_BackstopJS_Homepage_0_document_1_Desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});