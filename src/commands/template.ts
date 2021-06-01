const command_name = {
  name: "command-name",
  aliases: ["alias1", "alias2", "alias3"],
  description: "command-description",
  usage: "command-name <param1> <param2> [param3]",
  run: (client: object, msg: object, args: string) => {
    // Command code...
  },
};

export default command_name;