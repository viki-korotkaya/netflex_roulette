import reducer, {
  ModalWindowState,
  modalWindowAction,
} from "features/modalWindow/modalWindowSelector";
import { Mode } from "models/movie";

describe("modalWindow selectors", () => {
  // const state: RootState = {
  //   counter: {
  //     value: 3,
  //     status: "idle",
  //   },
  // };

  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      isOpen: false,
      mode: Mode.Default,
      editedMovie: null,
    });
  });

  test("should return state for open Add Modal", () => {
    const previousState: ModalWindowState = {
      isOpen: false,
      mode: Mode.Default,
      editedMovie: null,
    };

    expect(
      reducer(previousState, modalWindowAction.openModal({ mode: Mode.Add }))
    ).toEqual({ isOpen: true, mode: Mode.Add, editedMovie: null });
  });

  test("should return state for open Edit Modal", () => {
    const previousState: ModalWindowState = {
      isOpen: false,
      mode: Mode.Default,
      editedMovie: null,
    };

    expect(
      reducer(
        previousState,
        modalWindowAction.openModal({
          mode: Mode.Edit,
          editedMovie: { title: "testMovie" },
        })
      )
    ).toEqual({
      isOpen: true,
      mode: Mode.Edit,
      editedMovie: { title: "testMovie" },
    });
  });

  test("should return state for open Delete Modal", () => {
    const previousState: ModalWindowState = {
      isOpen: false,
      mode: Mode.Default,
      editedMovie: null,
    };

    expect(
      reducer(
        previousState,
        modalWindowAction.openModal({
          mode: Mode.Delete,
          editedMovie: { title: "testMovie" },
        })
      )
    ).toEqual({
      isOpen: true,
      mode: Mode.Delete,
      editedMovie: { title: "testMovie" },
    });
  });

  test("should return state for close Modal", () => {
    const previousState: ModalWindowState = {
      isOpen: true,
      mode: Mode.Add,
      editedMovie: null,
    };

    expect(reducer(previousState, modalWindowAction.closeModal())).toEqual({
      isOpen: false,
      mode: Mode.Default,
      editedMovie: null,
    });
  });
});
