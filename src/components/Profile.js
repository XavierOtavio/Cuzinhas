function Profile() {
  return (
    <div className="inline-flex items-center">
      <div className="m-4 flex flex-col items-center justify-center">
        <img
          className="rounded-full"
          src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
          alt="Xavier Otávio"
          width="200"
          height="200"
        />
      </div>
      <div className="m-4 flex flex-col items-start justify-center">
        <p className="text-xl font-bold">Cuzinheiro, Engenheiro e Filântropo</p>
        <p>Xavier Otávio</p>
      </div>
    </div>
  );
}

export default Profile;
