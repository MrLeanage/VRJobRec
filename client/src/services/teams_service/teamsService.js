export const openTeamsMeeting = (link) => {
  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Please enter a valid Teams meeting link or ID.");
  }
};
