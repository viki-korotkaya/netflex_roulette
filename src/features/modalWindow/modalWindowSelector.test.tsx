import reducer, {
  ModalWindowState,
  modalWindowAction,
} from "features/modalWindow/modalWindowSelector";
import { Mode } from "models/movie";

describe("modalWindow selectors", () => {
  const initialState: ModalWindowState = {
    isOpen: false,
    mode: Mode.Default,
    editedMovie: null,
  };

  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test("should return state for open Add Modal", () => {
    expect(
      reducer(initialState, modalWindowAction.openModal({ mode: Mode.Add }))
    ).toEqual(
      expect.objectContaining({
        isOpen: true,
        mode: Mode.Add,
      })
    );
  });

  test("should return state for open Edit Modal", () => {
    expect(
      reducer(
        initialState,
        modalWindowAction.openModal({
          mode: Mode.Edit,
          editedMovie: { title: "testMovie" },
        })
      )
    ).toEqual(
      expect.objectContaining({
        isOpen: true,
        mode: Mode.Edit,
        editedMovie: { title: "testMovie" },
      })
    );
  });

  test("should return state for open Delete Modal", () => {
    expect(
      reducer(
        initialState,
        modalWindowAction.openModal({
          mode: Mode.Delete,
          editedMovie: { title: "testMovie" },
        })
      )
    ).toEqual(
      expect.objectContaining({
        isOpen: true,
        mode: Mode.Delete,
        editedMovie: { title: "testMovie" },
      })
    );
  });

  test("should return state for close Modal", () => {
    const previousState: ModalWindowState = {
      isOpen: true,
      mode: Mode.Add,
      editedMovie: null,
    };

    expect(reducer(previousState, modalWindowAction.closeModal())).toEqual(
      initialState
    );
  });
});
