describe('toDo', function() {
  it("create a list of chores", function() {
    var testChore = new toDo ("mow lawn");
    expect(testChore.chore).to.equal("mow lawn");
    expect(testChore.tasklists).to.eql([]);
  });
});

  describe("tasklist", function(){
  it("creates a tasklist with the given properties", function(){
    var testTasklist = new tasklist("sharpen blade", "clean up yard");
    expect(testTasklist.task1).to.equal("sharpen blade");
    expect(testTasklist.task2).to.equal("clean up yard");
  });

  it("adds fulltask method to all tasklists", function(){
    var testtasklist = new tasklist("sharpen blade", "clean up yard");
    expect (testtasklist.fulltask()).to.equal("sharpen blade, clean up yard");
  });
});
