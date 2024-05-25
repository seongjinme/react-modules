# @seongjinme/react-modal

우아한테크코스 6기 FE 미션을 위해 제작된 React 기반의 간단한 모달 컴포넌트들입니다. 현재 지원되는 모달 컴포넌트의 종류는 다음과 같습니다.

- `Modal` : 기본 모달 컴포넌트입니다.
- `AlertModal` : 간단한 내용 출력과 "확인" 버튼이 지원되는 모달 컴포넌트입니다.
- `ConfirmModal` : 간단한 내용 출력과 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다.
- `PromptModal` : 입력 필드와 입력값의 전송 기능을 담은 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다.

## 설치 방법

```Bash
npm install @seongjinme/react-modal
```

# 사용 방법

## `Modal` 컴포넌트

```tsx
<Modal
  isOpen={isOpen}
  title="Title"
  size="medium"
  width="480px"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttons={buttons}
  buttonsFlexDirection="column"
  onClose={() => setIsOpen(false)}
>
  <p>Sample Modal!</p>
</Modal>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**되며, 아래의 **`width` 속성이 직접 지정된 경우에는 설정값이 무시**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `width` : 모달의 폭(width) 길이를 직접 지정합니다. 위의 `size` 속성과 이 `width` 속성이 함께 설정되었을 경우, `size`는 무시되고 이 속성으로 직접 부여된 길이가 적용됩니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttons` : 모달 하단에 배치할 버튼들을 설정합니다. 이 버튼들은 `ModalButtonType` 타입의 배열 형태로 추가 가능합니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`, `row-reverse`, `column`(기본값) 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### `buttons` 속성을 통해 버튼을 추가하는 방법

`ModalButtonType` 타입의 데이터로 추가할 버튼 항목과 스타일을 지정합니다. 이때 `onClick`으로 넘기는 콜백 함수로 `React.MouseEvent<HTMLButtonElement>` 타입의 이벤트(`event`)를 받아오실 수 있습니다. 아래 예시를 참고해주세요.

```TypeScript
[
  {
    text: 'Primary Button Style',
    style: 'primary',
    disabled: false,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => alert('Clicked primary button!'),
  },
  {
    text: 'Secondary Button Style',
    style: 'secondary',
    disabled: false,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => alert('Clicked secondary button!'),
  },
]
```

- `text` : 버튼 안에 포함될 텍스트를 정합니다.
- `style` : 버튼의 스타일을 정합니다. 배경색이 적용된 기본 스타일(`primary`), 윤곽선만 존재하는 스타일(`secondary`), 윤곽선과 배경색이 모두 제거된 투명 스타일(`transparent`) 중 하나를 선택하실 수 있습니다.
- `disabled`(선택) : 버튼의 활성화 여부를 `boolean` 타입으로 정합니다. 따로 지정하시지 않을 경우 기본값은 `true`로 고정됩니다.
- `onClick` : 버튼 클릭시 실행시킬 수 있는 콜백 함수를 정의합니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons: ModalButtonType[] = [
    {
      text: 'Primary Button Style',
      style: 'primary',
      onClick: () => alert('Clicked primary button!'),
    },
    {
      text: 'Secondary Button Style',
      style: 'secondary',
      onClick: () => alert('Clicked secondary button!'),
    },
  ];

  return (
    <>
      <h1>@seongjinme/react-modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <Modal
        isOpen={isOpen}
        title="Title"
        size="medium"
        position="center"
        hasCloseButton={true}
        buttons={buttons}
        onClose={() => setIsOpen(false)}
      >
        <p>Sample Modal!</p>
      </Modal>
    </>
  );
}
```

## `AlertModal` 컴포넌트

간단한 내용 출력과 "확인" 버튼이 지원되는 모달 컴포넌트입니다. 기본 모달의 축약형 컴포넌트로, 내부에 원하시는 포맷의 `children`을 설정하실 수 있으나 `buttons` 속성은 지원되지 않습니다.

```tsx
<AlertModal
  isOpen={isOpen}
  size="medium"
  width="480px"
  title="Title"
  confirmButtonText="확인"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttonsFlexDirection="column"
  onConfirm={(event: React.MouseEvent<HTMLButtonElement>) => handleConfirm(event)}
  onClose={() => setIsOpen(false)}
>
  <p>Sample Modal!</p>
</AlertModal>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `onConfirm` : 모달에서 "확인" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다. 이때 `React.MouseEvent<HTMLButtonElement>` 타입의 이벤트(`event`)를 인자로 받아오실 수 있습니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**되며, 아래의 **`width` 속성이 직접 지정된 경우에는 설정값이 무시**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `width` : 모달의 폭(width) 길이를 직접 지정합니다. 위의 `size` 속성과 이 `width` 속성이 함께 설정되었을 경우, `size`는 무시되고 이 속성으로 직접 부여된 길이가 적용됩니다.
- `confirmButtonText` : "확인" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `확인`입니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`(기본값), `row-reverse`, `column` 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>@seongjinme/react-modal/AlertModal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <AlertModal
        isOpen={isOpen}
        title="Title"
        onConfirm={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      >
        <p>This is the sample of AlertModal!</p>
      <AlertModal>
    </>
  );
}
```

## `ConfirmModal` 컴포넌트

간단한 내용 출력과 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다. 기본 모달의 축약형 컴포넌트로, 내부에 원하시는 포맷의 `children`을 설정하실 수 있으나 `buttons` 속성은 지원되지 않습니다.

```tsx
<ConfirmModal
  isOpen={isOpen}
  size="medium"
  width="480px"
  title="Title"
  confirmButtonText="확인"
  cancelButtonText="취소"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttonsFlexDirection="column"
  onConfirm={(event: React.MouseEvent<HTMLButtonElement>) => handleConfirm(event)}
  onCancel={(event: React.MouseEvent<HTMLButtonElement>) => handleCancel(event)}
  onClose={() => setIsOpen(false)}
>
  <p>Sample Modal!</p>
</ConfirmModal>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `onConfirm` : 모달에서 "확인" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다. 이때 `React.MouseEvent<HTMLButtonElement>` 타입의 이벤트(`event`)를 인자로 받아오실 수 있습니다.
- `onCancel` : 모달에서 "취소" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다. 이때 `React.MouseEvent<HTMLButtonElement>` 타입의 이벤트(`event`)를 인자로 받아오실 수 있습니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**되며, 아래의 **`width` 속성이 직접 지정된 경우에는 설정값이 무시**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `width` : 모달의 폭(width) 길이를 직접 지정합니다. 위의 `size` 속성과 이 `width` 속성이 함께 설정되었을 경우, `size`는 무시되고 이 속성으로 직접 부여된 길이가 적용됩니다.
- `confirmButtonText` : "확인" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `확인`입니다.
- `cancelButtonText` : "취소" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `취소`입니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`(기본값), `row-reverse`, `column` 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>@seongjinme/react-modal/ConfirmModal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <ConfirmModal
        isOpen={isOpen}
        title="Title"
        description="Description"
        buttonsFlexDirection="row-reverse"
        onConfirm={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      >
        <p>This is the sample of ConfirmModal!</p>
      </ConfirmModal>
    </>
  );
}
```

## `PromptModal` 컴포넌트

입력 필드와 입력값의 전송 기능을 담은 "확인", "취소" 버튼이 지원되는 모달 컴포넌트입니다. 기본 모달의 축약형 컴포넌트로, `buttons`와 `children`이 지원되지 않습니다.

```tsx
<ConfirmModal
  isOpen={isOpen}
  size="medium"
  width="480px"
  title="Title"
  inputField={inputField}
  submitButtonText="확인"
  cancelButtonText="취소"
  position="center"
  hasCloseButton={true}
  isClosableOnClickBackdrop={true}
  zIndex={{ backdrop: 999, modal: 1000 }}
  backdropOpacity="50%"
  buttonsFlexDirection="column"
  onSubmit={(event: React.MouseEvent<HTMLButtonElement>, value: string) =>
    handleSubmit(event, value)
  }
  onCancel={(event: React.MouseEvent<HTMLButtonElement>) => handleCancel(event)}
  onClose={() => setIsOpen(false)}
/>
```

### 필수 속성

- `isOpen` : 모달을 열고 닫을 수 있는 상태값을 주입합니다. (`true` / `false`)
- `title` : 모달의 제목입니다.
- `inputField` : 모달 본문 영역에 삽입할 입력 필드를 설정합니다.
- `onSubmit` : 모달에서 "확인" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다. 콜백 함수에는 `event`와 `value`의 두 인자가 함께 설정되어야 합니다.
  - `event` : `React.MouseEvent<HTMLButtonElement>` 타입의 이벤트입니다. 필요하지 않은 경우에는 언더바(`_`)로 표기하여 넘기실 수 있습니다.
  - `value` : 모달의 입력 필드에 입력된 값을 `string` 타입으로 받아오는 인자입니다.
- `onCancel` : 모달에서 "취소" 버튼을 눌렀을 때 실행시킬 콜백 함수를 설정합니다. 이때 `React.MouseEvent<HTMLButtonElement>` 타입의 이벤트(`event`)를 인자로 받아오실 수 있습니다.
- `onClose` : 모달을 닫을 때 실행시킬 콜백 함수를 설정합니다.

### 선택 속성

- `size` : 모달의 폭(width) 길이를 `small`, `medium`(기본값), `large`의 3단계로 정합니다. 이 가로폭은 **모달의 위치(`position`)가 화면 정중앙(`center`)으로 지정된 경우에만 적용**되며, 아래의 **`width` 속성이 직접 지정된 경우에는 설정값이 무시**됩니다.
  - `small` : 기본 가로폭이 `320px`로 설정됩니다.
  - `medium` : 기본 가로폭이 `480px`로 설정됩니다.
  - `large` : 기본 가로폭이 `600px`로 설정됩니다.
- `width` : 모달의 폭(width) 길이를 직접 지정합니다. 위의 `size` 속성과 이 `width` 속성이 함께 설정되었을 경우, `size`는 무시되고 이 속성으로 직접 부여된 길이가 적용됩니다.
- `submitButtonText` : "확인" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `확인`입니다.
- `cancelButtonText` : "취소" 버튼에 들어갈 텍스트를 설정합니다. 기본값은 `취소`입니다.
- `position` : 모달의 위치를 `center`(기본값) 또는 `bottom`으로 정합니다.
  - `'center'` : 모달을 화면의 정중앙에 위치시킵니다.
  - `'bottom'` : 모달을 화면 하단에 고정시킵니다. **화면 하단에 고정된 모달은 `size` 속성의 설정값과 무관하게 가로폭이 화면에 꽉 차도록 조정**됩니다.
- `hasCloseButton` : 모달의 우측 상단에 '닫기(X)' 버튼 노출 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `isClosableOnClickBackdrop` : 모달의 배경 영역 클릭 시 `onClose` 콜백 함수의 실행 여부를 `true`(기본값) 또는 `false`로 정합니다.
- `zIndex` : 모달의 배경 영역(`backdrop`; 기본값 `999`)과 모달 영역(`modal`; 기본값 `1000`)의 z-index 값을 정합니다.
- `backdropOpacity` : 모달의 배경 영역에 부여할 투명도를 정합니다. 기본값은 `50%`입니다.
- `buttonsFlexDirection` : 모달 하단에 배치되는 버튼들의 정렬 방식을 `row`(기본값), `row-reverse`, `column` 중 하나로 정합니다.
  - `row` : 버튼들을 모달 하단 우측에 가로-순방향으로 정렬시킵니다.
  - `row-reverse` : 버튼들을 모달 하단 우측에 가로-역방향으로 정렬시킵니다.
  - `column`: 버튼들을 모달 하단에 세로 방향으로 하나씩 정렬시킵니다.

### `inputField`를 통해 버튼을 추가하는 방법

아래와 같은 양식으로 추가할 입력 필드의 스타일을 지정합니다. 예시를 참고해주세요.

```TypeScript
{
  name: 'promptCouponInput'
  label: '쿠폰 번호를 입력해주세요.',
  placeholder: '쿠폰 번호',
  initialValue: '1234',
  errorMessage: '올바르지 않은 형식의 값입니다. 다시 입력해주세요.',
},
```

- `name`(필수) : 해당 입력 필드의 `<input>` 요소에 부여할 이름(name)을 정합니다.
- `label`(옵션) : 입력 필드 상단에 표기할 설명문을 정합니다.
- `placeholder`(옵션) : 해당 입력 필드의 `<input>` 요소에 위치시킬 예시값(placeholder)을 정합니다.
- `initialValue`(옵션) : 해당 입력 필드에 미리 입력해놓을 초깃값(defaultValue)을 정합니다. 이 값은 모달이 새로 열릴 때마다 입력 필드에 적용되어 나타납니다.
- `errorMessage`(옵션) : 입력 받은 값에 대한 `string` 타입의 에러 메시지를 담아 전달합니다. 이 값이 `undefined` 또는 `null`이 아닐 경우, 입력 필드의 `<input>` 요소 하단에 이 메시지가 적색(`#FF0000`)으로 노출되며 `<input>` 요소 또한 같은 색상의 border를 가지게 됩니다.

### 사용 예시

```tsx
import { useState } from 'react';
import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1>@seongjinme/react-modal/PromptModal</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal!</button>
      <PromptModal
        isOpen={isOpen}
        title="쿠폰 번호를 입력해 주세요."
        inputField={{
          name: 'promptCouponInput',
          label: '사용 가능하신 쿠폰 번호를 아래 입력 필드에 기입해주세요.',
          placeholder: '쿠폰 번호',
        }}
        buttonsFlexDirection="row-reverse"
        onSubmit={(_, value: string) => setInputValue(value)}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
```
