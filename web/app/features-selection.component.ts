import { Component }        from '@angular/core';
import { NgModel }          from '@angular/forms';

import 'rxjs/Rx';
import { Observable }         from "rxjs/Observable";

import { RequirementsService }    from './requirements.service';

@Component({
  moduleId: module.id,
  selector: 'features-selection',
  templateUrl: 'features-selection.html',
  styleUrls: ['features-selection.css'],
})

export class FeaturesSelectionComponent {
  chosen: string[] = [];
  
  constructor() {
    this.recursiveSplit(this.myTree);
  }

  onChosen(feature: string) {
    alert(feature);
    console.log(feature);
    this.chosen.push(feature);
    console.log(this.chosen);
  }

  recursiveSplit(my_obj: any) {
    // Replace for the object itself
    this.replace(my_obj)

    // And all of its children
    for(let obj of my_obj)
      this.replace(obj);
  }

  replace(obj: any) {
    if(obj.description != undefined) {
      // Remove whitespaces
      obj.description = obj.description.replace(" ", "");
      // Cast to array
      obj.description = obj.description.split(',');
    }

    if(obj.feature != undefined) 
      this.recursiveSplit(obj.feature);

    if(obj.and != undefined) 
      this.recursiveSplit(obj.and);

    if(obj.or != undefined) 
      this.recursiveSplit(obj.or);
  }

  myTree =
        [
        {
        "description": "",
        "and": [
          {
            "description": "RFFR - 007 Requirements",
            "or": {
              "description": "RFFR001, RFFR003, RFFR004, RFFR006, RFFR007",
              "or": [
                {
                  "description": "RFFR001",
                  "feature": [
                    {
                      "description": "RFFR001",
                      "_mandatory": "true",
                      "_name": "FR - Interface"
                    },
                    {
                      "description": "RFFR001",
                      "_mandatory": "true",
                      "_name": "FR - Functionality"
                    }
                  ],
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "FR - Application"
                },
                {
                  "description": "RFFR003, RFFR004, RFFR006, RFFR007",
                  "feature": [
                    {
                      "description": "RFFR003",
                      "_mandatory": "true",
                      "_name": "FR - Content"
                    },
                    {
                      "description": "RFFR003",
                      "_mandatory": "true",
                      "_name": "FR - Performance"
                    }
                  ],
                  "or": {
                    "description": "RFFR003, RFFR006, RFFR007",
                    "and": {
                      "description": "RFFR003, RFFR006, RFFR007",
                      "feature": [
                        {
                          "description": "RFFR006",
                          "_name": "FR - Coding"
                        },
                        {
                          "description": "RFFR006",
                          "_name": "FR - Compiling"
                        },
                        {
                          "description": "RFFR006",
                          "_name": "FR - Debugging"
                        },
                        {
                          "description": "RFFR006, RFFR007",
                          "_name": "FR - Testing"
                        }
                      ],
                      "_abstract": "true",
                      "_mandatory": "true",
                      "_name": "FR - Programming"
                    },
                    "feature": [
                      {
                        "description": "RFFR003",
                        "_mandatory": "true",
                        "_name": "FR - Result"
                      },
                      {
                        "description": "RFFR004",
                        "_mandatory": "true",
                        "_name": "FR - Upload"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "FR - Activity"
                  },
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "FR - Learning"
                }
              ],
              "_abstract": "true",
              "_mandatory": "true",
              "_name": "FR - Interaction"
            },
            "and": {
              "description": "RFFR005",
              "feature": [
                {
                  "description": "RFFR005",
                  "_name": "FR - Create"
                },
                {
                  "description": "RFFR005",
                  "_name": "FR - Read"
                },
                {
                  "description": "RFFR005",
                  "_name": "FR - Update"
                },
                {
                  "description": "RFFR005",
                  "_name": "FR - Delete"
                }
              ],
              "_abstract": "true",
              "_name": "FR - Feedback Management"
            },
            "_abstract": "true",
            "_mandatory": "true",
            "_name": "FR - Feedback and Results"
          },
          {
            "description": "RFUS - 3 Requirements",
            "or": {
              "description": "RFUS002, RFUS003",
              "feature": [
                {
                  "description": "RFUS002",
                  "_mandatory": "true",
                  "_name": "US - Login"
                },
                {
                  "description": "RFUS002",
                  "_mandatory": "true",
                  "_name": "US - Logoff"
                },
                {
                  "description": "RFUS003",
                  "_mandatory": "true",
                  "_name": "US - Anonymous"
                }
              ],
              "_abstract": "true",
              "_mandatory": "true",
              "_name": "US - Authentication"
            },
            "and": {
              "description": "RFUS002, RFUS003",
              "feature": [
                {
                  "description": "RFUS003",
                  "_mandatory": "true",
                  "_name": "US - Create"
                },
                {
                  "description": "RFUS003",
                  "_mandatory": "true",
                  "_name": "US - Read"
                },
                {
                  "description": "RFUS003",
                  "_name": "US - Update"
                },
                {
                  "description": "RFUS003",
                  "_name": "US - Delete"
                },
                {
                  "description": "RFUS002",
                  "_name": "US - Import Credentials"
                }
              ],
              "_abstract": "true",
              "_mandatory": "true",
              "_name": "US - Users Management"
            },
            "_mandatory": "true",
            "_name": "US - Users"
          },
          {
            "description": "RFCT - 6 Requirements",
            "and": {
              "description": "RFCT001",
              "feature": [
                {
                  "description": "RFCT001",
                  "_name": "CT - Create"
                },
                {
                  "description": "RFCT001",
                  "_name": "CT - Read"
                },
                {
                  "description": "RFCT001",
                  "_name": "CT - Update"
                },
                {
                  "description": "RFCT001",
                  "_name": "CT - Delete"
                }
              ],
              "_abstract": "true",
              "_name": "CT - Content Management"
            },
            "or": [
              {
                "description": "RFCT003",
                "feature": [
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "CT - Download"
                  },
                  {
                    "description": "RFCT002",
                    "_mandatory": "true",
                    "_name": "CT - Sharing"
                  }
                ],
                "_abstract": "true",
                "_name": "CT - Interaction"
              },
              {
                "description": "RFCT001, RFCT003, RFCT004",
                "or": [
                  {
                    "description": "RFCT001",
                    "feature": [
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - PDF"
                      },
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - Slides"
                      },
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - Web Page"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "CT - Statical Material"
                  },
                  {
                    "description": "RFCT003",
                    "feature": [
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - Text"
                      },
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - Sound"
                      },
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - Graphic"
                      },
                      {
                        "description": "RFCT003",
                        "_mandatory": "true",
                        "_name": "CT - Animation"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "CT - Multimedia Material"
                  },
                  {
                    "description": "",
                    "feature": [
                      {
                        "description": "RFCT001",
                        "_mandatory": "true",
                        "_name": "CT - Metaphors"
                      },
                      {
                        "description": "RFCT001",
                        "_mandatory": "true",
                        "_name": "CT - Microworlds"
                      },
                      {
                        "description": "RFCT001",
                        "_mandatory": "true",
                        "_name": "CT - Project"
                      },
                      {
                        "description": "RFCT001",
                        "_mandatory": "true",
                        "_name": "CT - Mini Content"
                      },
                      {
                        "description": "RFCT001",
                        "_mandatory": "true",
                        "_name": "CT - Thematic Unit"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "CT - Presentation"
                  }
                ],
                "_abstract": "true",
                "_name": "CT - Strategies"
              },
              {
                "description": "RFCT001, RFCT005",
                "feature": [
                  {
                    "description": "RFCT001",
                    "_mandatory": "true",
                    "_name": "CT - Pseudocode Representation"
                  },
                  {
                    "description": "RFCT001",
                    "_mandatory": "true",
                    "_name": "CT - Graphical Language Representation"
                  },
                  {
                    "description": "RFCT005",
                    "_mandatory": "true",
                    "_name": "CT - Testing"
                  }
                ],
                "_abstract": "true",
                "_name": "CT - Programming"
              }
            ],
            "feature": [
              {
                "description": "RFCT004",
                "_name": "CT - Screen Capture"
              },
              {
                "description": "RFCT002",
                "_name": "CT - Context Awareness"
              },
              {
                "description": "RFCT006",
                "_name": "CT - Control Progress"
              }
            ],
            "alt": {
              "description": "RFCT002",
              "feature": [
                {
                  "description": "RFCT002",
                  "_mandatory": "true",
                  "_name": "CT - Free"
                },
                {
                  "description": "RFCT002",
                  "_mandatory": "true",
                  "_name": "CT - Fix"
                }
              ],
              "_name": "CT - Content Learning Flux"
            },
            "_mandatory": "true",
            "_name": "CT - Contents"
          },
          {
            "description": "RFAT - 4 requirements",
            "and": {
              "description": "RFAT001",
              "feature": [
                {
                  "description": "RFAT001",
                  "_name": "AT - Activity Answers"
                },
                {
                  "description": "RFAT001",
                  "_name": "AT - Activity Case Tests"
                },
                {
                  "description": "RFAT001",
                  "_name": "AT - Correction Criteria"
                },
                {
                  "description": "RFAT001",
                  "_name": "AT - Activity and Content Relation"
                }
              ],
              "_abstract": "true",
              "_name": "AT - Assesment Management"
            },
            "or": [
              {
                "description": "RFAT001, RFAT002, RFAT003",
                "feature": [
                  {
                    "description": "RFAT002",
                    "_mandatory": "true",
                    "_name": "AT - Case Tests"
                  },
                  {
                    "description": "RFAT003",
                    "_mandatory": "true",
                    "_name": "AT - Code Coverage Tests"
                  },
                  {
                    "description": "RFAT002",
                    "_mandatory": "true",
                    "_name": "AT - Testing Tools"
                  }
                ],
                "_abstract": "true",
                "_name": "AT - Testing"
              },
              {
                "description": "RFAT002",
                "feature": [
                  {
                    "description": "RFAT002",
                    "_mandatory": "true",
                    "_name": "AT - Algorithms for Syntax Correction"
                  },
                  {
                    "description": "RFAT002",
                    "_mandatory": "true",
                    "_name": "AT - Detector of Plagiarism"
                  }
                ],
                "or": {
                  "description": "RFAT002",
                  "feature": [
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Deadlocks"
                    },
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Efficiency"
                    },
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Number of Parameters"
                    },
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Number of Commits"
                    },
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Complexity"
                    },
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Time"
                    },
                    {
                      "description": "RFAT002",
                      "_mandatory": "true",
                      "_name": "AT - Mutual Exclusion"
                    }
                  ],
                  "_mandatory": "true",
                  "_name": "AT - Source Code Metrics"
                },
                "_abstract": "true",
                "_name": "AT - Automatic Correction"
              },
              {
                "description": "RFAT001",
                "feature": [
                  {
                    "description": "RFAT001",
                    "_mandatory": "true",
                    "_name": "AT - Collective"
                  },
                  {
                    "description": "RFAT001",
                    "_mandatory": "true",
                    "_name": "AT - Individually"
                  }
                ],
                "_abstract": "true",
                "_name": "AT - Results"
              }
            ],
            "feature": {
              "description": "RFAT004",
              "_name": "AT - Manual Correction"
            },
            "_mandatory": "true",
            "_name": "AT - Assessments"
          },
          {
            "description": "RFTL - 14 requirements",
            "or": [
              {
                "description": "",
                "and": [
                  {
                    "description": "RFTL001",
                    "feature": [
                      {
                        "description": "RFTL001",
                        "_name": "TL - Courses Create"
                      },
                      {
                        "description": "RFTL001",
                        "_name": "TL - Courses Read"
                      },
                      {
                        "description": "RFTL001",
                        "_name": "TL - Courses Update"
                      },
                      {
                        "description": "RFTL001",
                        "_name": "TL - Courses Delete"
                      },
                      {
                        "description": "RFTL001",
                        "_name": "TL - Learner Subscribe"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "TL - Courses"
                  },
                  {
                    "description": "RFTL002",
                    "feature": [
                      {
                        "description": "RFTL002",
                        "_name": "TL - Teams Create"
                      },
                      {
                        "description": "RFTL002",
                        "_name": "TL - Teams Read"
                      },
                      {
                        "description": "RFTL002",
                        "_name": "TL - Teams Update"
                      },
                      {
                        "description": "RFTL002",
                        "_name": "TL - Teams Delete"
                      },
                      {
                        "description": "RFTL002",
                        "_name": "TL - Learner Allocation"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "TL - Teams"
                  },
                  {
                    "description": "RFTL003",
                    "or": {
                      "description": "RFTL003",
                      "feature": [
                        {
                          "description": "RFTL003",
                          "_mandatory": "true",
                          "_name": "TL - Manual"
                        },
                        {
                          "description": "RFTL003",
                          "_mandatory": "true",
                          "_name": "Tl - Automatically"
                        }
                      ],
                      "_name": "TL - Groups Create"
                    },
                    "feature": [
                      {
                        "description": "RFTL003",
                        "_name": "TL - Groups Read"
                      },
                      {
                        "description": "RFTL003",
                        "_name": "TL - Groups Update"
                      },
                      {
                        "description": "RFTL003",
                        "_name": "TL - Groups Delete"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "TL - Groups"
                  }
                ],
                "_name": "Tl - Formal Learning"
              },
              {
                "description": "RFTL004",
                "and": {
                  "description": "RFTL004",
                  "feature": {
                    "description": "RFTL004",
                    "_name": "TL - Chat"
                  },
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "TL - Synchronous"
                },
                "or": {
                  "description": "RFTL004",
                  "feature": [
                    {
                      "description": "RFTL004",
                      "_mandatory": "true",
                      "_name": "TL - Forum"
                    },
                    {
                      "description": "RFTL004",
                      "_mandatory": "true",
                      "_name": "TL - Email"
                    },
                    {
                      "description": "RFTL004",
                      "_mandatory": "true",
                      "_name": "TL - Blog"
                    },
                    {
                      "description": "RFTL004",
                      "_mandatory": "true",
                      "_name": "TL - Comments"
                    },
                    {
                      "description": "RFTL004",
                      "_mandatory": "true",
                      "_name": "TL - SMS"
                    }
                  ],
                  "or": {
                    "description": "RFTL004, RFTL007, RFTL012",
                    "feature": [
                      {
                        "description": "RFTL012",
                        "_mandatory": "true",
                        "_name": "TL - Sharing"
                      },
                      {
                        "description": "RFTL007",
                        "_mandatory": "true",
                        "_name": "TL - Rating"
                      },
                      {
                        "description": "RFTL007",
                        "_mandatory": "true",
                        "_name": "TL - Community"
                      }
                    ],
                    "_mandatory": "true",
                    "_name": "TL - Social Network"
                  },
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "TL - Asynchronous"
                },
                "_abstract": "true",
                "_name": "TL - Communication Mechanisms"
              },
              {
                "description": "RFTL009",
                "feature": [
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "TL - Learner"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "TL - Instructor"
                  }
                ],
                "_abstract": "true",
                "_name": "TL - Schedule"
              },
              {
                "description": "RFTL005, RFTL006, RFTL011, RFAC009",
                "feature": [
                  {
                    "description": "RFTL006, RFAC009",
                    "_mandatory": "true",
                    "_name": "TL - Cooperation"
                  },
                  {
                    "description": "RFTL005, RFAC009",
                    "_mandatory": "true",
                    "_name": "TL - Collaboration"
                  },
                  {
                    "description": "RFTL011, RFAC004",
                    "_mandatory": "true",
                    "_name": "TL - Competition"
                  }
                ],
                "_abstract": "true",
                "_name": "TL - Activity Users Interactions"
              },
              {
                "description": "RFTL004",
                "feature": [
                  {
                    "description": "RFTL004",
                    "_mandatory": "true",
                    "_name": "TL - Activities"
                  },
                  {
                    "description": "RFTL004",
                    "_mandatory": "true",
                    "_name": "TL - Contents"
                  }
                ],
                "_abstract": "true",
                "_name": "TL - Remote Access"
              }
            ],
            "feature": [
              {
                "description": "RFTL008",
                "_name": "TL - Intelligent Tutoring"
              },
              {
                "description": "RFTL010",
                "_abstract": "true",
                "_name": "TL - Design Patterns"
              }
            ],
            "_mandatory": "true",
            "_name": "TL - Supporting to Teaching and Learning"
          },
          {
            "description": "",
            "and": {
              "description": "RFAC002, RFAC005",
              "feature": [
                {
                  "description": "RFAC002",
                  "_name": "AC - Create"
                },
                {
                  "description": "RFAC002",
                  "_name": "AC - Read"
                },
                {
                  "description": "RFAC002",
                  "_name": "AC - Update"
                },
                {
                  "description": "RFAC002",
                  "_name": "AC - Delete"
                },
                {
                  "description": "RFAC005",
                  "_name": "AC - Repository"
                }
              ],
              "_abstract": "true",
              "_name": "AC - Activities Management"
            },
            "or": [
              {
                "description": "RFAC001, RFAC006, RFAC008",
                "feature": [
                  {
                    "description": "RFAC008",
                    "_mandatory": "true",
                    "_name": "AC - Download"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Sharing"
                  },
                  {
                    "description": "RFAC003",
                    "_mandatory": "true",
                    "_name": "AC - Doubts"
                  },
                  {
                    "description": "RFAC003",
                    "_mandatory": "true",
                    "_name": "AC - Authentication"
                  }
                ],
                "or": {
                  "description": "RFAC001, RFAC003",
                  "feature": [
                    {
                      "description": "RFAC003",
                      "_mandatory": "true",
                      "_name": "AC - File Validator"
                    },
                    {
                      "description": "RFAC003",
                      "_mandatory": "true",
                      "_name": "AC - Replacement"
                    }
                  ],
                  "_mandatory": "true",
                  "_name": "AC - Upload"
                },
                "_abstract": "true",
                "_name": "AC - Interactions"
              },
              {
                "description": "RFAC004",
                "feature": [
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Wikis"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Scaffolding"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Simulation\\Problem-Based"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Quiz"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Fill the Gap"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Microworlds"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Metaphors"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Gamification"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Incremental Solutions"
                  }
                ],
                "or": {
                  "description": "RFAC004",
                  "feature": [
                    {
                      "description": "RFAC004",
                      "_mandatory": "true",
                      "_name": "AC - Animations"
                    },
                    {
                      "description": "RFAC004",
                      "_mandatory": "true",
                      "_name": "AC - Drag-and-Drop"
                    },
                    {
                      "description": "RFAC004",
                      "_mandatory": "true",
                      "_name": "AC - Sensors"
                    }
                  ],
                  "_mandatory": "true",
                  "_name": "AC - Interactive"
                },
                "_abstract": "true",
                "_name": "AC - Presentation\\Strategies"
              },
              {
                "description": "RFAC007, RFAC010, RFAC009",
                "feature": [
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Coding"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Compiling"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Debugging"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Testing"
                  },
                  {
                    "description": "",
                    "_mandatory": "true",
                    "_name": "AC - Activity Realization Control"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Pair Programming"
                  },
                  {
                    "description": "RFAC004",
                    "_mandatory": "true",
                    "_name": "AC - Correction of Syntax"
                  }
                ],
                "_abstract": "true",
                "_name": "AC - Programming"
              }
            ],
            "feature": [
              {
                "description": "RFAC003",
                "_name": "AC - Internet Search Mechanism"
              },
              {
                "description": "RFAC004",
                "_name": "AC - Content Based"
              }
            ],
            "_mandatory": "true",
            "_name": "AC - Educational Activities"
          },
          {
            "description": "RFPG - 11 Requirements",
            "or": [
              {
                "description": "RFPG002",
                "feature": [
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - JavaDocs"
                  },
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - Syntax Error Detector"
                  },
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - Predictive Use of Words"
                  },
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - Record Activities"
                  }
                ],
                "_name": "PG - Source-Code Editor"
              },
              {
                "description": "RFPG001",
                "alt": {
                  "description": "RFPG001",
                  "feature": [
                    {
                      "description": "RFPG001",
                      "_mandatory": "true",
                      "_name": "PG - Native Compiler"
                    },
                    {
                      "description": "RFPG001",
                      "_mandatory": "true",
                      "_name": "PG - Remote Compiler"
                    }
                  ],
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "PG - Compiler Availability "
                },
                "feature": [
                  {
                    "description": "RFPG001",
                    "_mandatory": "true",
                    "_name": "PG - Metrics"
                  },
                  {
                    "description": "RFPG001",
                    "_mandatory": "true",
                    "_name": "PG - Learner Error Identifier"
                  }
                ],
                "or": {
                  "description": "RFPG001",
                  "feature": [
                    {
                      "description": "RFPG001",
                      "_mandatory": "true",
                      "_name": "PG - Compiler Process"
                    },
                    {
                      "description": "RFPG001",
                      "_mandatory": "true",
                      "_name": "PG - Learners' Mistakes"
                    }
                  ],
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "PG - Compiler Log"
                },
                "_name": "PG - Source-Code Compiler"
              },
              {
                "description": "RFPG003",
                "alt": {
                  "description": "RFPG003",
                  "feature": [
                    {
                      "description": "RFPG003",
                      "_mandatory": "true",
                      "_name": "PG - Native Debugger"
                    },
                    {
                      "description": "RFPG003",
                      "_mandatory": "true",
                      "_name": "PG - Remote Debugger"
                    }
                  ],
                  "_mandatory": "true",
                  "_name": "PG - Debugger Availability"
                },
                "feature": {
                  "description": "RFPG003",
                  "_mandatory": "true",
                  "_name": "PG - Parameters Input Alteration"
                },
                "_name": "PG - Source-Code Debugger"
              },
              {
                "description": "RFPG002",
                "feature": [
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - Keyboard"
                  },
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - Touch"
                  },
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "PG - Sensors"
                  },
                  {
                    "description": "RFPG002",
                    "_mandatory": "true",
                    "_name": "Bluetooth Devices"
                  }
                ],
                "_abstract": "true",
                "_name": "PG - Input Mechanisms"
              },
              {
                "description": "RFPG004",
                "or": {
                  "description": "RFPG004",
                  "feature": [
                    {
                      "description": "RFPG004",
                      "_mandatory": "true",
                      "_name": "PG - Text"
                    },
                    {
                      "description": "RFPG004",
                      "_mandatory": "true",
                      "_name": "PG - Sound"
                    },
                    {
                      "description": "RFPG004",
                      "_mandatory": "true",
                      "_name": "PG - Video"
                    },
                    {
                      "description": "RFPG004",
                      "_mandatory": "true",
                      "_name": "PG - Graphical"
                    }
                  ],
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "PG - Multimedia Representation"
                },
                "feature": [
                  {
                    "description": "",
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "PG - Animations"
                  },
                  {
                    "description": "RFPG004",
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "PG - Testing"
                  }
                ],
                "_abstract": "true",
                "_name": "PG - Programming Representations"
              },
              {
                "description": "RFPG007, RFAC004",
                "feature": [
                  {
                    "description": "RFPG007",
                    "_mandatory": "true",
                    "_name": "PG - Libraries and Packages"
                  },
                  {
                    "description": "RFPG007",
                    "_mandatory": "true",
                    "_name": "PG - Copy Paste Functions"
                  },
                  {
                    "description": "RFPG007",
                    "_mandatory": "true",
                    "_name": "PG - Source Code Excperpt"
                  }
                ],
                "_abstract": "true",
                "_name": "PG - Reuse"
              },
              {
                "description": "RFPG004, RFPG008",
                "feature": [
                  {
                    "description": "RFPG004",
                    "_mandatory": "true",
                    "_name": "PG - Pair Programming"
                  },
                  {
                    "description": "RFPG004",
                    "_mandatory": "true",
                    "_name": "PG - Scaffolding"
                  },
                  {
                    "description": "RFPG004",
                    "_mandatory": "true",
                    "_name": "PG - Problem-Based"
                  },
                  {
                    "description": "RFPG004",
                    "_mandatory": "true",
                    "_name": "PG - Example-Based"
                  },
                  {
                    "description": "RFPG004",
                    "_mandatory": "true",
                    "_name": "PG - Microworlds"
                  },
                  {
                    "description": "RFPG004",
                    "_mandatory": "true",
                    "_name": "PG - Metaphors"
                  }
                ],
                "or": {
                  "description": "RFPG008",
                  "feature": [
                    {
                      "description": "RFPG008",
                      "_mandatory": "true",
                      "_name": "PG - Badges"
                    },
                    {
                      "description": "RFPG008",
                      "_mandatory": "true",
                      "_name": "PG - Points"
                    },
                    {
                      "description": "RFPG008",
                      "_mandatory": "true",
                      "_name": "PG - Punishments"
                    },
                    {
                      "description": "RFPG008",
                      "_mandatory": "true",
                      "_name": "PG - Level Control Content"
                    },
                    {
                      "description": "RFPG008",
                      "_mandatory": "true",
                      "_name": "PG - Phases"
                    },
                    {
                      "description": "RFPG008",
                      "_mandatory": "true",
                      "_name": "PG - Code-based Behavior Changes"
                    }
                  ],
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "PG - Gamification"
                },
                "_abstract": "true",
                "_name": "PG - Programming Learning Strategies"
              }
            ],
            "feature": [
              {
                "description": "RFPG006",
                "_name": "PG - Learner Interface Adaptation"
              },
              {
                "description": "",
                "_name": "PG - Programming Language"
              }
            ],
            "_mandatory": "true",
            "_name": "PG - Programming Mechanisms"
          },
          {
            "description": "RNF - 38 Requirements",
            "feature": [
              {
                "description": "RNF002",
                "_mandatory": "true",
                "_name": "NF - Internationalization"
              },
              {
                "description": "RNF003",
                "_name": "NF - Operability"
              },
              {
                "description": "RNF003, RNF005",
                "_name": "NF - Learnability"
              },
              {
                "description": "RNF004, RNF005",
                "_mandatory": "true",
                "_name": "NF - Atractivity"
              },
              {
                "description": "RNF009",
                "_mandatory": "true",
                "_name": "NF - User Interface"
              },
              {
                "description": "RNF005m RFFR002",
                "_name": "NF - Intelligibility"
              },
              {
                "description": "RNF014",
                "_name": "NF - Recoverability"
              },
              {
                "description": "RNF014",
                "_name": "NF - Maturity"
              },
              {
                "description": "RNF015, RNF016, RNF017, RNF018, RNF019",
                "_name": "NF - Interoperability"
              },
              {
                "description": "RNF016",
                "_name": "NF - Coexistence"
              },
              {
                "description": "RNF023",
                "_name": "NF - Modificability"
              },
              {
                "description": "RNF023",
                "_name": "NF - Configuration"
              },
              {
                "description": "RNF023",
                "_name": "NF - Extensibility"
              },
              {
                "description": "RNF025, RNF026, RNF027",
                "_name": "NF - Conformity"
              },
              {
                "description": "RNF029",
                "_name": "NF - Accurancy"
              },
              {
                "description": "RNF031",
                "_name": "NF - Acessibility"
              },
              {
                "description": "RNF037",
                "_name": "NF - Installability"
              },
              {
                "description": "RNF038",
                "_name": "NF - Repleaceability"
              },
              {
                "description": "RNF014",
                "_name": "NF - Fault Tolerance"
              }
            ],
            "and": [
              {
                "description": "RNF007, RNF015, RNF016, RNF031, RNF032, RNF033",
                "and": [
                  {
                    "description": "RNF007",
                    "or": {
                      "description": "RNF007",
                      "feature": [
                        {
                          "description": "RNF007",
                          "_mandatory": "true",
                          "_name": "NF - GPRS"
                        },
                        {
                          "description": "RNF007",
                          "_mandatory": "true",
                          "_name": "NF - GSM"
                        },
                        {
                          "description": "RNF007",
                          "_mandatory": "true",
                          "_name": "NF - IrDA"
                        },
                        {
                          "description": "RNF007",
                          "_mandatory": "true",
                          "_name": "NF - NFC"
                        },
                        {
                          "description": "RNF007",
                          "_mandatory": "true",
                          "_name": "NF - IEEE 802.11"
                        }
                      ],
                      "_name": "NF - Connection Protocol"
                    },
                    "_abstract": "true",
                    "_name": "NF - Mobility"
                  },
                  {
                    "description": "RNF016, RNF015, RFCT004",
                    "and": {
                      "description": "RFPG010",
                      "feature": [
                        {
                          "description": "RNF015, RFPG010",
                          "_name": "NF- Robots"
                        },
                        {
                          "description": "RNF015, RFPG010",
                          "_name": "NF - Raspberry Pi"
                        }
                      ],
                      "_name": "NF - External Devices"
                    },
                    "feature": {
                      "description": "",
                      "_name": "NF - Applications"
                    },
                    "_abstract": "true",
                    "_name": "NF - Mobile Integration"
                  }
                ],
                "or": [
                  {
                    "description": "RNF007, RNF032, RNF033",
                    "feature": [
                      {
                        "description": "RNF033",
                        "_mandatory": "true",
                        "_name": "NF - Memory"
                      },
                      {
                        "description": "RNF033",
                        "_mandatory": "true",
                        "_name": "NF - Storage"
                      },
                      {
                        "description": "RNF034",
                        "_mandatory": "true",
                        "_name": "NF - Battery"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "NF - Use of Resources"
                  },
                  {
                    "description": "",
                    "feature": [
                      {
                        "description": "",
                        "_mandatory": "true",
                        "_name": "NF - Local Data Base"
                      },
                      {
                        "description": "",
                        "_mandatory": "true",
                        "_name": "NF - Remote Data Base"
                      }
                    ],
                    "_abstract": "true",
                    "_mandatory": "true",
                    "_name": "NF - Data Base"
                  }
                ],
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "NF - Mobile Platform"
              },
              {
                "description": "RNF013, RNF024",
                "feature": [
                  {
                    "description": "RNF024",
                    "_name": "NF - Authenticity"
                  },
                  {
                    "description": "",
                    "_name": "NF - Privacy"
                  }
                ],
                "_name": "NF - Security"
              },
              {
                "description": "RNF012",
                "feature": {
                  "description": "RNF012",
                  "_name": "NF - Number of Users"
                },
                "_mandatory": "true",
                "_name": "NF - Capacity"
              }
            ],
            "or": [
              {
                "description": "RNF017",
                "feature": [
                  {
                    "description": "RNF017",
                    "_mandatory": "true",
                    "_name": "NF - Asynchronous Communication"
                  },
                  {
                    "description": "RNF017",
                    "_mandatory": "true",
                    "_name": "NF - Synchronous Communication"
                  }
                ],
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "NF - Communication"
              },
              {
                "description": "RNF018, RNF019, RFAC002, RFCT003, RFAT002, RFAC001, RFPG009",
                "feature": [
                  {
                    "description": "RNF019",
                    "_mandatory": "true",
                    "_name": "NF - Online"
                  },
                  {
                    "description": "RNF018",
                    "_mandatory": "true",
                    "_name": "NF - Offline"
                  }
                ],
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "NF - Availability"
              },
              {
                "description": "RNF017, RNF018, RNF019",
                "feature": [
                  {
                    "description": "RNF017",
                    "_mandatory": "true",
                    "_name": "NF - Asynchronous"
                  },
                  {
                    "description": "RNF017",
                    "_mandatory": "true",
                    "_name": "NF - Synchronous"
                  }
                ],
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "NF - Synchronization"
              },
              {
                "description": "RNF020, RNF030",
                "feature": [
                  {
                    "description": "RNF020",
                    "_mandatory": "true",
                    "_name": "NF - e-Learning Systems"
                  },
                  {
                    "description": "RNF020",
                    "_mandatory": "true",
                    "_name": "NF - t-Learning Systems"
                  },
                  {
                    "description": "RNF030",
                    "_mandatory": "true",
                    "_name": "NF - Modules"
                  }
                ],
                "_abstract": "true",
                "_name": "NF - Integration"
              },
              {
                "description": "RNF023",
                "feature": [
                  {
                    "description": "RNF023",
                    "_mandatory": "true",
                    "_name": "NF - Programming Modificability"
                  },
                  {
                    "description": "RNF023",
                    "_mandatory": "true",
                    "_name": "NF - Programming Configuration"
                  },
                  {
                    "description": "RNF023",
                    "_mandatory": "true",
                    "_name": "NF - Programming Extensibility"
                  }
                ],
                "_abstract": "true",
                "_name": "NF - Programming"
              },
              {
                "description": "RNF021, RNF026, RNF022",
                "feature": [
                  {
                    "description": "RNF021",
                    "_mandatory": "true",
                    "_name": "NF - Services"
                  },
                  {
                    "description": "RNF026",
                    "_mandatory": "true",
                    "_name": "NF - Cost-Effective"
                  },
                  {
                    "description": "RNF022",
                    "_mandatory": "true",
                    "_name": "NF - Elasticity"
                  }
                ],
                "_abstract": "true",
                "_name": "NF - Technology"
              }
            ],
            "_mandatory": "true",
            "_name": "NF - Nonfunctional Requirements"
          }
        ],
        "or": {
          "description": "RFPM - 4 Requirements",
          "feature": [
            {
              "description": "RFPM001",
              "_mandatory": "true",
              "_name": "PM - Register"
            },
            {
              "description": "RFPM002",
              "_mandatory": "true",
              "_name": "PM - Reports"
            }
          ],
          "or": {
            "description": "RFPM001, RFPM003, RFPM004",
            "or": [
              {
                "description": "RFPM001",
                "and": {
                  "description": "RFPM001",
                  "feature": [
                    {
                      "description": "RFPM001",
                      "_name": "PM - Coding"
                    },
                    {
                      "description": "RFPM001",
                      "_name": "PM - Compiling"
                    },
                    {
                      "description": "RFPM001",
                      "_name": "PM - Debugging"
                    },
                    {
                      "description": "RFPM001",
                      "_name": "PM - Testing"
                    }
                  ],
                  "_abstract": "true",
                  "_mandatory": "true",
                  "_name": "PM - Programming"
                },
                "feature": [
                  {
                    "description": "RFPM001",
                    "_mandatory": "true",
                    "_name": "PM - Progress"
                  },
                  {
                    "description": "RFPM001",
                    "_mandatory": "true",
                    "_name": "PM - Difficulties"
                  },
                  {
                    "description": "RFPM001",
                    "_mandatory": "true",
                    "_name": "PM - Performance"
                  }
                ],
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "PM - Learning"
              },
              {
                "description": "RFPM001, RFPM003",
                "feature": [
                  {
                    "description": "RFPM001",
                    "_mandatory": "true",
                    "_name": "PM -  Activity"
                  },
                  {
                    "description": "RFPM001",
                    "_mandatory": "true",
                    "_name": "PM - Content"
                  },
                  {
                    "description": "RFPM001",
                    "_mandatory": "true",
                    "_name": "PM - Time Interaction"
                  },
                  {
                    "description": "RFPM003",
                    "_mandatory": "true",
                    "_name": "PM - Monitoring Configuration"
                  }
                ],
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "PM -  Time"
              }
            ],
            "feature": [
              {
                "description": "RFPM001",
                "_mandatory": "true",
                "_name": "PM - Interactions"
              },
              {
                "description": "RFPM004",
                "_abstract": "true",
                "_mandatory": "true",
                "_name": "PM - Support"
              }
            ],
            "_abstract": "true",
            "_mandatory": "true",
            "_name": "PM - Monitoring"
          },
          "_mandatory": "true",
          "_name": "PM - Monitoring and Learning Performance"
        },
        "_abstract": "true",
        "_mandatory": "true",
        "_name": "M-learning Requirements Catalog"
        }
        ];
}