/**
 * Copyright (c) 2011 Derrell Lipman
 * 
 * License:
 *   LGPL: http://www.gnu.org/licenses/lgpl.html 
 *   EPL : http://www.eclipse.org/org/documents/epl-v10.php
 */

qx.Class.define("aiagallery.rpcsim.ObjFlags",
{
  extend : aiagallery.rpcsim.Entity,
  
  construct : function(uid)
  {
    // Pre-initialize the data
    this.setData(
      {
        "type"        : null,
        "app"         : null,
        "comment"     : null,
        "visitor"     : null,
        "timestamp"   : new Date(),
        "explanation" : null
      });

    // Call the superclass constructor
    this.base(arguments, "flags", uid);
  },
  
  defer : function(clazz)
  {
    aiagallery.rpcsim.Entity.registerEntityType(clazz.classname, "flags");

    var databaseProperties =
      {
        /** Type of flag ("App" = application, "Comment" = comment) */
        "type" : "String",

        /** UID of the AppData object which was flagged */
        "app" : "Key",

        /** UID of the Comment object which was flagged */
        "comment" : "String",

        /** Id of the Visitor who flagged the application or comment */
        "visitor" : "String",

        /** Time the like occurred */
        "timestamp" : "String",

        /** Explanation for why the application or comment was flagged */
        "explanation" : "String"
      };

    // Register our property types
    aiagallery.rpcsim.Entity.registerPropertyTypes("flags",
                                                   databaseProperties);
  }
});
