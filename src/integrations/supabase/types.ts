export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      dog_progress: {
        Row: {
          completed: boolean
          completion_date: string | null
          created_at: string
          dog_id: string
          id: string
          in_progress: boolean
          lesson_id: string
          updated_at: string
        }
        Insert: {
          completed?: boolean
          completion_date?: string | null
          created_at?: string
          dog_id: string
          id?: string
          in_progress?: boolean
          lesson_id: string
          updated_at?: string
        }
        Update: {
          completed?: boolean
          completion_date?: string | null
          created_at?: string
          dog_id?: string
          id?: string
          in_progress?: boolean
          lesson_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "dog_progress_dog_id_fkey"
            columns: ["dog_id"]
            isOneToOne: false
            referencedRelation: "dogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dog_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "training_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      dogs: {
        Row: {
          age: number
          age_unit: string
          breed: string
          created_at: string
          id: string
          name: string
          photo_url: string | null
          training_path: Database["public"]["Enums"]["training_path"]
          updated_at: string
          user_id: string
        }
        Insert: {
          age: number
          age_unit: string
          breed: string
          created_at?: string
          id?: string
          name: string
          photo_url?: string | null
          training_path: Database["public"]["Enums"]["training_path"]
          updated_at?: string
          user_id: string
        }
        Update: {
          age?: number
          age_unit?: string
          breed?: string
          created_at?: string
          id?: string
          name?: string
          photo_url?: string | null
          training_path?: Database["public"]["Enums"]["training_path"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      program_lessons: {
        Row: {
          action_instruction: string
          created_at: string
          duration_minutes: number | null
          id: string
          intro_text: string
          level: number | null
          program_id: string
          sequence_order: number
          title: string
          video_url: string | null
        }
        Insert: {
          action_instruction: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          intro_text: string
          level?: number | null
          program_id: string
          sequence_order: number
          title: string
          video_url?: string | null
        }
        Update: {
          action_instruction?: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          intro_text?: string
          level?: number | null
          program_id?: string
          sequence_order?: number
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "program_lessons_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "training_programs"
            referencedColumns: ["id"]
          },
        ]
      }
      training_lessons: {
        Row: {
          content: string | null
          created_at: string
          description: string
          duration: string
          id: string
          level: number
          sequence_order: number
          title: string
          training_path: Database["public"]["Enums"]["training_path"]
          video_url: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          description: string
          duration: string
          id?: string
          level: number
          sequence_order: number
          title: string
          training_path: Database["public"]["Enums"]["training_path"]
          video_url?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          description?: string
          duration?: string
          id?: string
          level?: number
          sequence_order?: number
          title?: string
          training_path?: Database["public"]["Enums"]["training_path"]
          video_url?: string | null
        }
        Relationships: []
      }
      training_paths: {
        Row: {
          created_at: string
          description: string
          id: string
          name: string
          path_type: Database["public"]["Enums"]["training_path"]
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          name: string
          path_type: Database["public"]["Enums"]["training_path"]
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          name?: string
          path_type?: Database["public"]["Enums"]["training_path"]
        }
        Relationships: []
      }
      training_programs: {
        Row: {
          color: string | null
          created_at: string
          description: string
          icon_name: string | null
          id: string
          name: string
          sequence_order: number
          subtitle: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description: string
          icon_name?: string | null
          id?: string
          name: string
          sequence_order: number
          subtitle: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string
          icon_name?: string | null
          id?: string
          name?: string
          sequence_order?: number
          subtitle?: string
        }
        Relationships: []
      }
      training_quiz_results: {
        Row: {
          can_sit_indoors: boolean | null
          confident_off_leash: boolean | null
          created_at: string
          dog_description: string | null
          dog_name: string
          gets_excited_new_places: boolean | null
          id: string
          recommended_program_id: string | null
          user_id: string
        }
        Insert: {
          can_sit_indoors?: boolean | null
          confident_off_leash?: boolean | null
          created_at?: string
          dog_description?: string | null
          dog_name: string
          gets_excited_new_places?: boolean | null
          id?: string
          recommended_program_id?: string | null
          user_id: string
        }
        Update: {
          can_sit_indoors?: boolean | null
          confident_off_leash?: boolean | null
          created_at?: string
          dog_description?: string | null
          dog_name?: string
          gets_excited_new_places?: boolean | null
          id?: string
          recommended_program_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "training_quiz_results_recommended_program_id_fkey"
            columns: ["recommended_program_id"]
            isOneToOne: false
            referencedRelation: "training_programs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_badges: {
        Row: {
          badge_description: string
          badge_name: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          badge_description: string
          badge_name: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          badge_description?: string
          badge_name?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_lesson_progress: {
        Row: {
          completed_at: string | null
          completion_status: string | null
          created_at: string
          dog_name: string | null
          id: string
          lesson_id: string
          program_id: string
          reward_style: string | null
          training_environment: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          completion_status?: string | null
          created_at?: string
          dog_name?: string | null
          id?: string
          lesson_id: string
          program_id: string
          reward_style?: string | null
          training_environment?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          completion_status?: string | null
          created_at?: string
          dog_name?: string | null
          id?: string
          lesson_id?: string
          program_id?: string
          reward_style?: string | null
          training_environment?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "program_lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_progress_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "training_programs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      training_path: "fresh_start" | "rescue_journey"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      training_path: ["fresh_start", "rescue_journey"],
    },
  },
} as const
