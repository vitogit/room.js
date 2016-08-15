function ({player, dobj, iobj, verbstr, argstr, dobjstr, prepstr, iobjstr}) {
  let verb = verbstr;
  let found = false;
  
  if (this.allowedCommands.indexOf( verb ) !== -1) {
    // See if any item in the location can accept the command
    let command = {verb, argstr, dobjstr, prepstr, iobjstr};
    found = this.contents.some(item => {
      // It could be good to ignore players here - Since this means having the 
      // player will be forced to perform an action
      /* if (item.player) {
        return false;
      } else { */
        return this.delegateCommand(player, item, command);
      /* } */
    });
  }
  
  if (!found) {
    player.tell(color.gray("There's no one here to hear you."));
  }
}