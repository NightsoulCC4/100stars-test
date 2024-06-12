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
  setModalOpen: (open: boolean) => void;
  record?: DataType;
  id?: string;
  data?: DataType[];
  setData?: (data: DataType[]) => void | undefined;
}

interface Action {
  data: DataType[];
  id: string | undefined;
  record: DataType | undefined;
}
