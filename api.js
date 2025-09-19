async function handleBugSend(chatId, selectedBug) {
  const res = await fetch(`https://http://68.183.230.201:2674/kipopapi?chatId=${encodeURIComponent(chatId)}&type=${selectedBug}`);
  if (!res.ok) throw new Error("Gagal menghubungi server");
  return await res.json();
}
