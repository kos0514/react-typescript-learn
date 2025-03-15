import { useState, useEffect, ReactNode } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
} from '@mui/material';

import CommonButton from '@/components/atom/CommonButton';
import PostTextField from '@/components/atom/PostTextField.tsx';
import SubTitle from '@/components/atom/SubTitle.tsx';

/**
 * useEffectの勉強で使用する共通のCardコンポーネント
 *
 * @param question 質問
 * @param children 質問に使用する子要素
 */
const UseEffectStudyCard = ({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
        {children}
      </CardContent>
    </Card>
  );
};

/**
 * UseEffectStudyコンポーネント - useEffectの理解を深めるための練習用コンポーネント
 *
 * このコンポーネントでは以下のuseEffectの使い方を学べます：
 * 1. マウント時の一度だけの実行
 * 2. 特定の値が変更された時の実行
 * 3. クリーンアップ関数の使い方
 * 4. 非同期処理の扱い方
 */
const UseEffectStudy = () => {
  // 問題1： マウント時
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // 問題2: カウンターの状態
  const [count, setCount] = useState<number>(0);

  // 問題3: タイマー用の状態
  const [seconds, setSeconds] = useState<number>(0);

  // 問題4: ユーザーリスト用の状態
  const [users, setUsers] = useState<string[]>([]);

  // おまけ: 入力テキストの状態
  const [text, setText] = useState<string>('');

  // 問題1: マウント時に一度だけコンソールにメッセージを表示する
  // ヒント: 依存配列を空にすると、コンポーネントがマウントされた時だけ実行されます
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 問題2: countの値が変わるたびにドキュメントのタイトルを更新する
  // ヒント: 依存配列にcountを入れると、countが変わるたびに実行されます
  useEffect(() => {
    // ここにコードを書いてください
    document.title = `Count: ${count}`;

    // クリーンアップ関数
    return () => {
      // ここにクリーンアップのコードを書いてください
      document.title = 'Vite + React + TS';
    };
  }, [count]);

  // 問題3: タイマーを作成し、1秒ごとにsecondsを増やす
  // そして、コンポーネントがアンマウントされたときにタイマーをクリーンアップする
  // ヒント: setIntervalを使い、return関数でclearIntervalを実行します
  useEffect(() => {
    // ここにコードを書いてください
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // クリーンアップ関数
    return () => {
      // ここにクリーンアップのコードを書いてください
      clearInterval(intervalId);
    };
  }, []);

  // 問題4: 非同期関数を使ってモックユーザーデータを取得する
  // ヒント: useEffect内で非同期関数を定義して呼び出します
  useEffect(() => {
    // ここにコードを書いてください
    // 以下のモック関数を使ってユーザーデータを取得してください
    const fetchUsers = async () => {
      // 非同期処理を模擬（実際のAPIコールの代わり）
      return new Promise<string[]>((resolve) => {
        setTimeout(() => {
          resolve(['ミキ', 'ハニー', 'プロデューサー', 'アイドル']);
        }, 1000);
      });
    };

    (async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    })();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <SubTitle subTitle="useEffect 勉強コンポーネント" />
      <UseEffectStudyCard question="問題1: マウント時の一度だけの実行">
        <>
          <Typography>
            このコンポーネントがマウントされた時、コンソールに「コンポーネントがマウントされました！」と表示されるはずです。
          </Typography>
          <Typography>
            このコンポーネントがマウントされました：
            {isMounted ? 'はい' : 'いいえ'}
          </Typography>
        </>
      </UseEffectStudyCard>
      <UseEffectStudyCard question="問題2: 特定の値の変更監視">
        <>
          <Typography>
            カウントが変わるたびに、ドキュメントのタイトルが「Count: {count}
            」に更新されるはずです。
          </Typography>
          <CommonButton
            label={`カウントアップ: ${count}`}
            onClick={() => setCount((prev) => prev + 1)}
          />
        </>
      </UseEffectStudyCard>
      <UseEffectStudyCard question="問題3: タイマーとクリーンアップ">
        <>
          <Typography>
            このコンポーネントがマウントされてから {seconds} 秒経過しました。
          </Typography>
          <Typography variant="caption">
            （コンポーネントがアンマウントされるとタイマーは停止します）
          </Typography>
        </>
      </UseEffectStudyCard>
      <UseEffectStudyCard question="問題4: 非同期データ取得">
        <>
          <Typography gutterBottom>取得したユーザー:</Typography>
          <List>
            {users.map((user, index) => (
              <ListItem key={index}>{user}</ListItem>
            ))}
          </List>
        </>
      </UseEffectStudyCard>
      <UseEffectStudyCard question="おまけ: テキスト入力と即時反映">
        <>
          <PostTextField
            label="テキストを入力してください"
            value={text}
            setValue={setText}
          />
          <Typography>入力されたテキスト: {text}</Typography>
          <Typography variant="caption">
            （この機能にはuseEffectは必要ありません。なぜでしょうか？）
          </Typography>
        </>
      </UseEffectStudyCard>
    </Box>
  );
};

export default UseEffectStudy;
