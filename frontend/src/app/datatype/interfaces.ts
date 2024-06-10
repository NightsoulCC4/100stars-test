interface DataType {
  id: string;
  fname: string;
  lname: string;
  gender: number;
  dob: string;
  address: string;
  tambon: string;
  amphoe: string;
  provice: string;
  id_card_valid_date: string;
}

interface Table {
  data: DataType[];
}

interface Modal {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  record?: DataType;
  id?: string;
}
