editor.ui.registry.addMenuButton('menuDateButton', {
    text: 'Date',
    fetch: function (callback) {
      var items = [
        {
          type: 'menuitem',
          text: 'Insert Date',
          onAction: function (_) {
            editor.insertContent(toDateHtml(new Date()));
          }
        },
        {
          type: 'nestedmenuitem',
          text: 'Other formats',
          getSubmenuItems: function () {
            return [
              {
                type: 'menuitem',
                text: 'GMT',
                onAction: function (_) {
                  editor.insertContent(toGmtHtml(new Date()));
                }
              },
              {
                type: 'menuitem',
                text: 'ISO',
                onAction: function (_) {
                  editor.insertContent(toIsoHtml(new Date()));
                }
              }
            ];
          }
        }
      ];
      callback(items);
    }
  });